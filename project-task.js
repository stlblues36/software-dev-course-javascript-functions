/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users


/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!
// Function to greet a user
function greetUser(name) {
   console.log("Welcome, " + name + "!");
}

// Function to calculate the sum of two numbers
function calculateSum(num1, num2) {
   return num1 + num2; // return the sum of num1 and num2
}

// Function to calculate the product of two numbers
function calculateProduct(num1, num2) { 
   return num1 * num2; // return the product of num1 and num2
}

// Function to print names in an array
function printNames(namesArray) {
   console.log("Names in the list:");
   for (let i = 0; i < namesArray.length; i++) {
       console.log(namesArray[i]); // print each name in the array
   }
}

// Script 1 - Greeting multiple users (using the function)
greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");

// Script 2 - Sum calculation (using the function)
let num1 = 5, num2 = 10;
let sum = calculateSum(num1, num2); // using the calculateSum function
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

// Script 3 - Product calculation (using the function)
let product = calculateProduct(num1, num2); // using the calculateProduct function
console.log("The product of " + num1 + " and " + num2 + " is " + product);

// Script 4 - Print names from a list (using the function)
let names = ["Alice", "Bob", "Charlie"];
printNames(names); // using the printNames function