import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import getWeb3 from "./getWeb3";
import Navbar from "./components/Navbar";
import Payments from "./components/Payments";
import LicenseToken from "./contracts/LicenseToken.json";
import MyToken from "./contracts/MyToken.json";
import MyTokenSale from "./contracts/MyTokenSale.json";
import { BigNumber } from "bignumber.js";

class App extends Component {
  state = {
    loaded: false,
    web3: null,
    accounts: null,
    contract: null,
    tokenSaleAddress: " ",
    userTokens: 0,
    order: 1,
    boss: "0x721d8574379BF9bB88a4Ca3442cCE095556279A7",
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.getChainId();
      this.licenseToken = new this.web3.eth.Contract(
        LicenseToken.abi,
        LicenseToken.networks[this.networkId] &&
          LicenseToken.networks[this.networkId].address
      );
      this.myToken = new this.web3.eth.Contract(
        MyToken.abi,
        MyToken.networks[this.networkId] &&
          MyToken.networks[this.networkId].address
      );

      this.myTokenSale = new this.web3.eth.Contract(
        MyTokenSale.abi,
        MyTokenSale.networks[this.networkId] &&
          MyTokenSale.networks[this.networkId].address
      );
      //console.log(MyToken.networks[this.networkId].address);
      this.updateUserTokens();
      this.listenToTokenTransfer();
     

      // Set web3, accounts, and contract to the state, and then proceed with an
      this.setState({ loaded: true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleBuyToken = async () => {
    await this.myTokenSale.methods.buyTokens(this.accounts[0]).send({
      from: this.accounts[0],
      value: this.state.order * 2500000000000,
    });
  };
  updateUserTokens = async () => {
    let userTokens = await this.myToken.methods
      .balanceOf(this.accounts[0])
      .call();
    this.setState({ userTokens: userTokens / 10000000000000 });
  };
  listenToTokenTransfer = async () => {
    this.myToken.events
      .Transfer({ to: this.accounts[0] })
      .on("data", this.updateUserTokens);
  };
  PayBoss = async () => {
    const num = 0.6969
    let x = new BigNumber(num* 10 ** 13);
    //const tokenDecimals = this.web3.toBigNumber(13);
    //const tokenAmountToTransfer = this.web3.toBigNumber(0.6969);
    const calculatedTransferValue = this.web3.utils.toHex(x.toFixed());
    await this.myToken.methods
      .transfer(this.state.boss, calculatedTransferValue)
      .send({ from: this.accounts[0] });

    //await this.myToken.methods.Transfer().Transfer({from:this.accounts[0]})
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <Navbar />
        <Route path="/Payments">
          <Payments
            handC={this.handleInputChange}
            handB={this.handleBuyToken}
            payboss={this.PayBoss}
            RemainToken={this.state.userTokens}
          />
          </Route>
      </Router>
    );
  }
}

export default App;
