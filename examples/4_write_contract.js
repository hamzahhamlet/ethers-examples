const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
	`https://kovan.infura.io/v3/${INFURA_ID}`
);

const account1 = ""; // Your account address 1
const account2 = ""; // Your account address 2

const privateKey1 =
	""; // Private key of account 1

// Connection to user wallet
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
	"function balanceOf(address) view returns (uint)",
	"function transfer(address to, uint amount) returns (bool)",
];

const address = "0xa36085F69e2889c224210F603D836748e7dC0088";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
	const balance = await contract.balanceOf(account1);

	console.log(`\nReading from: ${address}\n`);
	console.log(`Balance of sender: ${balance}`);

	// Step 1 -> Connect to the contract with our wallet
	const contractWithWallet = contract.connect(wallet);

	// Send transaction
	const tx = await contractWithWallet.transfer(account2, balance);
	tx.wait();
	console.log(tx);

	const balanceOfSender = await contract.balanceOf(account1);
	const balanceOfReceiver = await contract.balanceOf(account2);

	console.log(`Balance of sender: ${balanceOfSender}`);
	console.log(`Balance of receiver: ${balanceOfReceiver}`);
};

main();
