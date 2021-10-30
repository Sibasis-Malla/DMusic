const path = require("path");
require('dotenv').config();
const key = process.env.MNEMONIC;
const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
      network_id: "1337"
    },
    ropsten: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(`${key}`,`https://ropsten.infura.io/v3/1d5fb752e905416ea938459ac8872368`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    goerli: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(`${key}`,`https://goerli.infura.io/v3/1d5fb752e905416ea938459ac8872368`),
      network_id: 5,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(`${key}`,`https://rinkeby.infura.io/v3/1d5fb752e905416ea938459ac8872368`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
    version: "^0.8.7"
    }
}
};
