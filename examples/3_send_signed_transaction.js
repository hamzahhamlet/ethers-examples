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

const main = async () => {
	// Show balances before transfer
	const senderBalanceBefore = await provider.getBalance(account1);
	const receiverBalanceBefore = await provider.getBalance(account2);

	console.log(
		`\nSender Balance Before: ${ethers.utils.formatEther(
			senderBalanceBefore
		)}`
	);
	console.log(
		`\nReceiver Balance Before: ${ethers.utils.formatEther(
			receiverBalanceBefore
		)}`
	);

	// Send ether
	const tx = await wallet.sendTransaction({
		to: account2,
		value: ethers.utils.parseEther("0.025"),
	});

	// Wait for transaction to be mined
	await tx.wait();
	console.log(tx);

	// Show balances after transfer
	const senderBalanceAfter = await provider.getBalance(account1);
	const receiverBalanceAfter = await provider.getBalance(account2);

	console.log(
		`\nSender Balance After: ${ethers.utils.formatEther(
			senderBalanceAfter
		)}`
	);
	console.log(
		`\nReceiver Balance After: ${ethers.utils.formatEther(
			receiverBalanceAfter
		)}`
	);
};

main();
