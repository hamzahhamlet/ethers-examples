const { ethers } = require("ethers");

const INFURA_PROJECT_ID = "";
const INFURA_MAINNET_URL = `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`;

const provider = new ethers.providers.JsonRpcProvider(INFURA_MAINNET_URL);

const ERC20_ABI = [
	"function name() view returns (string)",
	"function symbol() view returns (string)",
	"function totalSupply() view returns (uint256)",
	"function balanceOf(address) view returns (uint)",
];

const address = ""; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider); // Gets a deployed copy of the contract

const main = async () => {
	const name = await contract.name();
	console.log("name", name);
};

main();
