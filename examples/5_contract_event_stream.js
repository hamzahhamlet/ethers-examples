const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
	`https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
	"function name() view returns (string)",
	"function symbol() view returns (string)",
	"function totalSupply() view returns (uint256)",
	"function balanceOf(address) view returns (uint)",
	"event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = ""; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
	const latestBlockNo = await provider.getBlockNumber();

	const transferEvents = await contract.queryFilter(
		"Transfer",
		latestBlockNo - 10,
		latestBlockNo
	);
	console.log(transferEvents);
};

main();
