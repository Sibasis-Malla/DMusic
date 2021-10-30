var LicenseToken = artifacts.require("./LicenseToken.sol");
var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSales = artifacts.require("./MyTokenSale.sol");

const BigNumber = require('bignumber.js');
require('dotenv').config();
let x = new BigNumber(1000*10**13);



module.exports = async function(deployer) {
let addr = await web3.eth.getAccounts();
await deployer.deploy(MyToken, 1000);

await deployer.deploy(MyTokenSales, 4, addr[0], MyToken.address);
let tokenInstance = await MyToken.deployed();
await tokenInstance.transfer(MyTokenSales.address, x.toFixed());
await deployer.deploy(LicenseToken);

};
// module.exports = function(deployer) {
// };
