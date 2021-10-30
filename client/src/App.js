import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import getWeb3 from "./getWeb3";
import client from "./ipfs";
import Addinfo from "./components/License";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Player from "./components/Player";
import Payments from "./components/Payments";
import LicenseToken from "./contracts/LicenseToken.json";
import MyToken from "./contracts/MyToken.json";
import MyTokenSale from "./contracts/MyTokenSale.json";
import { BigNumber } from "bignumber.js";
import Music from "./Data";
BigNumber.config({ DECIMAL_PLACES: 6 })

class App extends Component {
  state = {
    loaded: false,
    SongName: "",
    description: "",
    web3: null,
    accounts: null,
    contract: null,
    ipfsHash: null,
    buffer: null,
    jsonData: null,
    metaData: null,
    metaDataLink: null,
    tokenSaleAddress: " ",
    userTokens: 0,
    order: 1,
    boss: "0x721d8574379BF9bB88a4Ca3442cCE095556279A7",
    id:0,
    timer:0,
    increment:null,
  };

  componentDidMount = async () => {
    try {
      document.title = "DMusic"
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

  captureFile = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer.from(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const result = await client.add(this.state.buffer);
    this.setState({ ipfsHash: result.path });
    //console.log(this.state.ipfsHash);
    this.createJson();
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  createJson = async () => {
    const obj = {
      Songname: this.state.SongName,
      Description: this.state.description,
      song: this.state.ipfsHash,
    };
    const objJson = JSON.stringify(obj);
    this.setState({ jsonData: objJson });
    this.setState({ metaData: Buffer.from(objJson) });
    const result = await client.add(this.state.metaData);
    this.setState({ metaDataLink: result.path });
    console.log(this.state.metaDataLink);
    this.mintToken();
    //console.log(result);
  };
  mintToken = async () => {
    const URI ="https://ipfs.infura.io:5001/api/v0/cat?arg="+String(this.state.metaDataLink);
     console.log(URI);
    //const URI = `https://ipfs.infura.io:5001/api/v0/cat?arg=${this.state.metaDataLink}`
    const result = await this.licenseToken.methods.CreateLicense(this.accounts[0], URI).send({ from: this.accounts[0] ,gas:300000});
    console.log(result)
    const result2 = result.events.TokenURI.returnValues.tokenuri;
    alert("Congratulations! License Minted, See Your Metadata at "+result2);
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
    const num = (localStorage.getItem('timer')/3600) * 0.8
    const y = new BigNumber(num,10)
    let x = new BigNumber(y* 10 ** 13);
    console.log('x',x)
    //const tokenDecimals = this.web3.toBigNumber(13);
    //const tokenAmountToTransfer = this.web3.toBigNumber(0.6969);
    const calculatedTransferValue = this.web3.utils.toHex(x.toFixed());
    await this.myToken.methods
      .transfer(this.state.boss, calculatedTransferValue)
      .send({ from: this.accounts[0] });

      this.setState({timer:0})
      localStorage.removeItem('timer')

    //await this.myToken.methods.Transfer().Transfer({from:this.accounts[0]})
  };
  getId = (event)=>{
    this.setState({id:event})

  };
  handlePlay = ()=>{
    console.log("Timer",this.state.timer)
    this.setState( {increment : setInterval(() => {
       this.setState({timer: this.state.timer+1})
      }, 1000)})
  }

  handlePause = () => {
    clearInterval(this.state.increment)
    localStorage.setItem('timer',this.state.timer)
    console.log("Timer",this.state.timer)
    
  }



  handleReset = () => {
    clearInterval(this.state.increment)
    this.setState({timer:0})
  }

  render() {
    if (!this.state.loaded) {
      return (
      <div>
      You are viewing this page beacause Metamask is not installed or You are on a wrong network
      Please visit the link below to download the Metamask extension and create an account(Its Free!)
      <div>
      <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Link1</a>
      </div>
      <div>
      After installing change your current network from Ethereum Mainnet to Ropsten Test network(From the drop Down Menu) and visit the below link to get test ether
      </div>
      <a href="https://faucet.ropsten.be/">Link2</a>
      <div>To get address click on "Account 1" and paste the address in the form</div>
      <div>Refresh Page! You are set to go !</div>
  
      </div>
      );
    }
    return (
      <Router>
        <Navbar />
        <Route path ="/" exact>
          <Home
          getI ={this.getId}>
          </Home>
        </Route>
        <Route path="/Home">
          <Home  
           getI ={this.getId}
          />
        </Route>
        <Route path="/License">
          <Addinfo
            submit={this.onSubmit}
            cap={this.captureFile}
            handC={this.handleInputChange}
          />
        </Route>
        <Route path="/Payments">
          <Payments
            handC={this.handleInputChange}
            handB={this.handleBuyToken}
            payboss={this.PayBoss}
            RemainToken={this.state.userTokens}
            timer = {localStorage.getItem('timer')/3600}

          />
        </Route>
        <Route path={`/${Music[this.state.id].id}`}>
            <Player
            Data =  {Music[this.state.id]}
            pause =  {this.handlePause}
            play =   {this.handlePlay}
            />
          </Route>
      </Router>
    );
  }
}

export default App;
