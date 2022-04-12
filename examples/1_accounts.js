const { ethers } = require("ethers");

const INFURA_PROJECT_ID = "";
const INFURA_MAINNET_URL = `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`;

const provider = new ethers.providers.JsonRpcProvider(INFURA_MAINNET_URL);

const address = "";

const main = async () => {
	const balance = await provider.getBalance(address);
	console.log(
		`\nETH balance of ${address} -> ${ethers.utils.formatEther(balance)}\n`
	);
};

main();
