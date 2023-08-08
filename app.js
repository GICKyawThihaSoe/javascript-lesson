// Naming Convention
// Variable Join
// Console commands

// Example 1: Concatenating strings
let firstname = "Mg Mg ";
let lastname = "Aung Aung";
let name = firstname + lastname;    
console.log(name); // Output: "Mg Mg Aung Aung"
console.log(typeof name); // Output: "string"

// Example 2: Adding a number to a string
let a = 20;
let b = " Mg Mg";
let c = a + b;
console.log(c); // Output: "20 Mg Mg"
console.log(typeof c); // Output: "string"

// Example 3: Adding two numbers
let d = 20;
let e = 30;
let f = d + e;
console.log(f); // Output: 50
console.log(typeof f); // Output: "number"

// Example 4: Adding a boolean to a string
let g = true;
let h = " Mg Mg";
let gh = g + h;
console.log(gh); // Output: "true Mg Mg"
console.log(typeof gh); // Output: "string"

// Example 5: Adding a number and a boolean
let num = 20;
let bool = true;
let numbool = num + bool ;
console.log(numbool); // Output: 21 (true is treated as 1 in this context)
console.log(typeof numbool); // Output: "number"

// Example 6: Adding a number and a boolean (false is treated as 0)
let num1 = 20;
let bool1 = false;
let num1bool1 = num1 + bool1;
console.log(num1bool1); // Output: 20
console.log(typeof num1bool1); // Output: "number"

// Example 7: Adding two booleans (true is treated as 1, false as 0)
let bool2 = true;
let bool3 = false;
let boolt = bool2 + bool3;
console.log(boolt); // Output: 1
console.log(typeof boolt); // Output: "number"

let con = "Console commands";
console.warn(con);
console.error(con);
console.log(con);
// console.clear();

// Start measuring time
console.time("Time:D");

// Log multiple "hey bro" messages
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");
console.log("hey bro");

// End measuring time and display the elapsed time
console.timeEnd("Time:D");

let FirstName = "Mg Mg"; // pascale case
let first_name = "Mg Mg"; // underscore convention
let firstNameSir = "Mg Mg"; // camel case
let First_Name = "Mg Mg"; // snake case, const variable