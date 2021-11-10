# DMusic
## About
DMusic is a Music streaming platform with pay-as-much-as-you stream functionality. Apart from that it also provides Artists an easy way to license their work.
## To Run the Application


1. Make Sure you have Metamask installed and connected to ropsten, Goerli,Or rinkeby Network and have some test Ethers.

2. Run the following commands on your local Machine
```
cd client
npm install
npm start
```

## Working:

### Streaming and Payments

1. When you are buying tokens as soon as the buy button is pressed Contract interaction takes place and the entered amount of DMusic tokens is transferred to your wallet after paying the Ether amount.

2. While Streaming Music/Songs your total streaming duration is collected and updated to your current ListenHours.

3. When you press the pay button again Contract interaction takes place and certain amount of tokens corresponding to your Current ListenHours is deducted and ListenHours is resetted to 0.

### Licensing

1. When you upload your artwork and its data it is Uploaded to IPFS and after upload completion metadata is fetched and passed to the NFT smart Contract and your NFT(DML-DMusicLicense) license is minted after transaction approval.


Project DEMO - https://www.youtube.com/watch?v=oZIz56OLcr0
