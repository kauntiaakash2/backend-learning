// //Lets try the login authentication
const input = require("readline-sync");
// const id = input.question("Enter the student_id: ");
// if (id == "2415514") {
//   const pass = input.question("Enter the password: ");
//   if (pass == "1234") console.log("Logined Sucessfully!🎉");
//   else console.log("Incorrect Password!");
// } else console.log("Invalid User Name!");

//SWITCH CASE

// const marks = input.question("Enter your Marks: ");

// let Branch;

// switch (true) {
//   case marks >= 90:
//     Branch = "Computer science engineering";
//     break;
//   case marks >= 80:
//     Branch = "Mechanical engineering";
//     break;
//   case marks >= 70:
//     Branch = "Chemical engineering";
//     break;
//   case marks >= 60:
//     Branch = "Electronics and communication";
//     break;
//   case marks >= 50:
//     Branch = "Civil engineering";
//     break;
//   default:
//     Branch = "Bio technology";
//     break;
// }

// console.log(`Student Branch name is : ${Branch}`);

//Ternary Operator
// let age = input.question("Enter you Age: ");

// const result =
//   age >= 18 ? "You are eligible to vote.✅" : "You are not eligible to vote.❎";

// console.log(result);

// Nested Ternay Operator
// let day = 5;
// let greeting =
//   day === 1
//     ? "Start of the week"
//     : day === 2
//     ? "Second day"
//     : day === 3
//     ? "Midweek"
//     : day === 4
//     ? "Almost weekend"
//     : day === 5
//     ? "Last day before Weekend"
//     : "Weekend";
// console.log(greeting);

// NESTED IF ELSE
// let weather = input.question("Enter the Weather: ");
// let temp = input.question("Enter the Temp: ");

// if (weather === "sunny" || weather === "Sunny") {
//   if (temp > 30) {
//     console.log("It's a hot day!");
//   } else if (temp > 20) {
//     console.log("It's a warm day.");
//   } else {
//     console.log("It's a bit cool today.");
//   }
// } else if (weather === "rainy") {
//   console.log("Don't forget your umbrella!");
// } else {
//   console.log("Check the weather forecast!");
// }

// // Using the Ternary Operator with Function Calls
// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// function sayGoodbye(name) {
//   console.log(`Goodbye, ${name}!`);
// }

// let isLeaving = true;
// let name = "Geeks";

// isLeaving ? sayGoodbye(name) : sayHello(name);

// // Function In a ternary operator
// function checkAge(age) {
//   return age >= 18 ? "Adult" : "Minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(15));

let hour = new Date().getHours();
console.log(hour);
hour >= 0 && hour < 12
  ? console.log("Good Morning!")
  : hour > 18 && hour <= 23
  ? console.log("Good Night!")
  : console.log("Good Afternoon!");
