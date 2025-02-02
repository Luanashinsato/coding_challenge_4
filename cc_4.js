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

// Task 3: While Loop
let stock = 10; // Declaring a variable with an initial stock value 
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
} // Using a while loop to decrease stock by 1 until it reaches zero
console.log("Stock depleted."); // Logging final stock status

// Task 4: Do...While Loop
let responses = 0; // Declaring a responses variable with an initial value
do {
    console.log(`Response count: ${responses}`);
    responses++;
} while (responses < 3); // Using a do...while loop to collect responses until it reaches 3 

// Task 5: For...In Loop
let employee = {name: "Alice", position: "Manager", salary: 75000}; // Declaring an object employee 
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}; // Using a for...in loop to iterate through the object properties, and logging each property and value 
