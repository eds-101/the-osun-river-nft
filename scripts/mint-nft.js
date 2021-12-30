require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyWeb3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/OsunRiverNFT.sol/TorNFT.json"); 
const contractAddress = "0x123b2ed2e798b43315161f6b59ca1879e608ab2f";
const nftContract = new alchemyWeb3.eth.Contract(contract.abi, contractAddress);
