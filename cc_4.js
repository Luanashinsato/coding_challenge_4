// Task 1: If Statements 
let purchaseAmount = 180; // Declaring a variable for purchaseAmount 
if (purchaseAmount > 100) {
    purchaseAmount *= 0.9; 
} // Applying a 10% discount if purchase amount is greater than 100
console.log(`Final Amount After Discount: $${purchaseAmount}`); // Logging the final amount

// Task 2: For Loop 
let sales = [150, 82, 120, 50, 65]; // Declaring a sales array 
let totalSales = 0; // Initializing totalSales variable
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
} // Using a for loop to calculate the total sales
console.log(`Total sales: $${totalSales}`); // Logging the total sales
