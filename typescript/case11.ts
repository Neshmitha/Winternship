// 1️⃣ Transactions and counter
const transactions: string[] = ["checkout", "return", "priority", "checkout", "cancelled", "return"];

// Define a type for the keys
type TransactionType = "checkout" | "return" | "priority" | "cancelled";

// Create a counter object with proper type
const transactionCount: Record<TransactionType, number> = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};

// Count transactions using a for loop
for (let t of transactions) {
    if (t in transactionCount) {
        transactionCount[t as TransactionType] += 1;
    }
}
console.log("Transaction counts:", transactionCount);

//Infinite while loop with break on priority
let i = 0;
while (true) {
    const t = transactions[i];
    console.log("Processing:", t);
    i += 1;
    if (t === "priority") {
        console.log("Priority transaction! Breaking loop.");
        break;
    }
    if (i >= transactions.length) break; 
}

//Do…while loop handling dynamic return queue
let returnQueue: string[] = ["return1", "return2"];
const processed: string[] = [];

do {
    const current = returnQueue.shift();
    if (current) {
        console.log("Processing return:", current);
        processed.push(current);
        if (current === "return1") returnQueue.push("return3");
    }
} while (returnQueue.length > 0);

//For…in loop to reset inventory
const inventory: Record<string, number> = { apples: 10, bananas: 5, oranges: 7 };
for (const item in inventory) {
    inventory[item] = 0;
}
console.log("Inventory reset:", inventory);

//Display visitor names in reverse order
const visitors: string[] = ["Alice", "Bob", "Charlie", "David"];
console.log("Visitors in reverse order:");
for (let j = visitors.length - 1; j >= 0; j--) {
    console.log(visitors[j]);
}