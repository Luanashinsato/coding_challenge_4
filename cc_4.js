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

// Task 6: For...Of Loop
let products = ["Smartphone", "Tablet", "Wireless Charger"]; // Declaring an array products 
for (let product of products) {
    console.log(`Product: ${product}`);
} // Using a for...of loop to display each product and logging each product name

// Task 7: forEach() Method
let orders = [80, 81, 82]; // Declaring an array orders 
orders.forEach(order => {
    console.log(`Order ID: ${order}`)
}); // Using the forEach() method to log each order ID 

// Task 8: Function Declaration
function calculateTax(amount) {
    return amount * 0.18;
} // Writing a function calculateTax that takes an amount and tax rate of 18%
let tax = calculateTax(500) // Calling the function
console.log(`Calculated tax: $${tax}`); // Logging the calculated tax 

// Task 9: Function Expressions
const applyDiscount = function(price, discount) {
    return price - (price * (discount / 100));
}; // Declaring a function expression applyDiscount that takes a price and discount percentage
let discountedPrice = applyDiscount(250, 10) // Calling the function
console.log(`Discounted price: $${discountedPrice}`); // Logging the discounted price

// Task 10: Arrow Functions
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10 );
}; // Writing an arrow function calculatePoints that takes a purchase amount and returns points earned
let points = calculatePoints(150); // Calling the function 
console.log(`Loyalty points earned: ${points}`); // Logging the loyalty points 
