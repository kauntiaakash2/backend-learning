// How to Concatenate Strings in JavaScript?
// comments
// Here are the various methods to concatenate strings in JavaScript
// 1. Using Template Literals (Template Strings)
// Template literals (introduced in ES6) provide a simple way to concatenate strings. With template literals, you can embed expressions inside a string using ${} syntax. This method makes the code cleaner and easier to maintain, especially when working with dynamic content.
let fName = "Mohit";
let lName = "Kumar";
let fullName = `${fName} ${lName}`;
console.log(fullName);

// Output
// Mohit Kumar
// Ideal for concatenating strings with variables or expressions.
// Spaces and other characters can be included directly inside the template.

// 2. Using the + Operator
// The + (plus) operator is the most common way to concatenate strings. It’s simple to use, and you can combine two or more strings with a plus sign between them.
let fName1 = "Mohit";
let lName1 = "Kumar";
let fullName1 = fName1 + " " + lName1;
console.log(fullName1);

// Output
// Mohit Kumar
// Easy to use for basic string concatenation.
// Works with all types of strings and variables.

// 3. Using the concat() Method
// The concat() method is a built-in JavaScript function that combines multiple strings into one. While not as commonly used as the + operator or template literals, concat() is still a valid option, especially when you want a method-based approach.
let greet = "Hello";
let time = "Morning";
let mes = greet.concat(" ", time);
console.log(mes);

// Output
// Hello Morning
// You can pass multiple strings to concat() to join them all at once.
// It doesn’t modify the original strings; it returns a new string.

// 4. Using join() for Arrays
// When you have an array of strings and want to join them together, the join() method is a great choice. It concatenates all elements in an array into a single string, with an optional separator between them.
let a1 = ["Hello", "world", "from", "JavaScript"];
let s = a1.join(" ");
console.log(s);

// Output
// Hello world from JavaScript
// Perfect for concatenating all elements of an array into one string.
// Allows you to specify a separator, such as a comma, space, or any other character.

// 5. Using String.fromCharCode() and reduce()
// For advanced uses, you can use String.fromCharCode() combined with reduce(). This method is usually used for specific cases, such as creating strings based on character codes or reducing an array into a single string in a custom way.
let a = [72, 101, 108, 108, 111];
let greet1 = a.reduce((acc, code) => acc + String.fromCharCode(code), "");
console.log(greet1);

// Output
// Hello
// Useful when working with character codes or when custom logic is required during concatenation.
// Provides flexibility for complex scenarios, like transforming arrays of numbers into strings based on specific logic.
// For most everyday use cases, template literals and the + operator are the go-to options. However, for more advanced scenarios, concat(), join(), or reduce() with String.fromCharCode() might be more suitable.
