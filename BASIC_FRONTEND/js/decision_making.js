console.log("hello world");
let total = 1 + 5;
console.log("goodbye");

// if statement

let random = Math.random();
if (random < 0.5) {
  console.log("Your Number Is Less Than 0.5!!!");
  console.log(random);
} else {
  console.log("Your Number Is greater Than 0.5!!!");
  console.log(random);
}

// esle if
// let dayOfWeek = prompt("enter a day of week").toLowerCjjjase();
// if (dayOfWeek === "monday") {
//   console.log("uhhh i hate mondays!!");
// } else if (dayOfWeek === "saturday") {
//   console.log("uhhh i love sats!!");
// } else if (dayOfWeek === "tuesday") {
//   console.log("uhhh tuesday are decent!!");
// } else {
//   console.log("meh!!");
// }
// else if (dayOfWeek === "sunday") {
//   console.log("meh!");
// } else if (dayOfWeek === "friday") {
//   console.log("meh!!");
// } else if (dayOfWeek === "thursday") {
//   console.log("meh!!");
// }

// nesting conditon
// let password = prompt("enter the password");
// if (password.length >= 6) {
//   if (password.indexOf("") === -1) {
//     console.log("valid password");
//   } else {
//     console.log("password cannot contain spaces!");
//   }
// } else {
//   console.log("password too short! must be 6+ chars");
// }

// truthy or falsey
if (null) {
  console.log("truthy");
} else {
  console.log("falsey");
}

// logical AND
let andsach = true && true;
let andjuth = false && false;
// let password = prompt("enter the password");
// if (password.length >= 6 && password.indexOf("") === -1) {
//   console.log("valid password");
// } else {
//   console.log("invalid password");
// }

// logical OR
let orsach = true || false;
let orjuth = false || false;
// let age = prompt("enter ur age");
// if (age < 5 || age >= 70) {
//   console.log("your tkts are free maje karo");
// } else {
//   console.log("u pay $10!!");
// }

// logical NOT
let notsach = !true;
let notjuth = !false;
// let firstName = prompt("enter ur name");
// if (!firstName) {
//   firstName = prompt("try again");
// } else {
//   console.log("thanks");
// }

// SWITCH
const day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("I Dont Know That");
}
