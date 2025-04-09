/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?

// Task 1: Function to generate an attendee badge
function generateAttendeeBadge(name, role) {
    return `Name: ${name}, Role: ${role.charAt(0).toUpperCase() + role.slice(1)}`;
}

// Task 2: Function to calculate the total cost of the event
function calculateCost(numAttendees, costPerAttendee) {
    let totalCost = numAttendees * costPerAttendee;
    // Apply 10% discount if attendees exceed 100
    if (numAttendees > 100) {
        totalCost = totalCost * 0.9;  // Apply 10% discount
    }
    return totalCost;
}

// Task 3: Function to validate an email address
function validateEmail(email) {
    // Check if email contains "@" and "."
    return email.includes("@") && email.includes(".");
}
// Test cases for Task 1: Generating an Attendee Badge
console.log(generateAttendeeBadge("Alice", "speaker"));  // Expected output: "Name: Alice, Role: Speaker"
console.log(generateAttendeeBadge("Bob", "attendee"));   // Expected output: "Name: Bob, Role: Attendee"

// Test cases for Task 2: Calculating the Total Cost
console.log(calculateCost(120, 25));  // Expected output: 2700 (after 10% discount)
console.log(calculateCost(90, 25));   // Expected output: 2250 (no discount, 90 attendees)

// Test cases for Task 3: Validating Email Address
console.log(validateEmail("alice@example.com"));  // Expected output: true
console.log(validateEmail("bobexample.com"));    // Expected output: false
console.log(validateEmail("charlie@domain"));    // Expected output: false
console.log(validateEmail("david@domain.co"));   // Expected output: true    