# Hardhat Setup
Create a new file named .env under the hardhat directory, and add the following placeholder values in it:
```
PRIVATE_KEY="..."
RPC_URL="..."
ETHERSCAN_API_KEY="..."
```
For the PRIVATE_KEY, export the private key from an account in your MetaMask wallet. Make sure that account has no real funds on Mainnet, and is a development only account. Ensure you don't accidentally leak a private key that has real funds on mainnet and lose your money. Once you have exported the private key, replace the value in .env with the actual key.

For the RPC_URL, go to Quicknode and sign up for an account if you haven't already. If you have already made a Sepolia endpoint there before, just re-use that and add the value of the HTTP Provider into the RPC_URL field. If you haven't, follow the steps to create a new Ethereum endpoint and select the Sepolia network, then grab the HTTP Provider link that you get.

For the ETHERSCAN_API_KEY, login to https://etherscan.io/ and generate a new one or copy an existing API key from there and put it in the .env file.

# Deployment 
Now, to actually deploy all of them, run the following in your terminal:
```
npx hardhat run scripts/deploy.js --network sepolia
```
After the contracts are finished deploying and verified on Etherscan, make note of all the contract addresses and then let's mint a few CryptoDevs NFTs to different wallets that you control.

Take the CryptoDevs NFT contract address and look it up on Sepolia Etherscan. Go to the Contract tab and then Write Contract. Connect different MetaMask wallets, one at a time, there - and call the mint function repeatedly to have a few different accounts hold the NFT.

