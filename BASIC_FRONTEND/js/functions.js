//=====================================
//  INTRO TO FUNCTIONS
// =====================================

// defining a function
// function singSong() {
//   console.log("Sa");
//   console.log("Re");
//   console.log("Ga");
//   console.log("Ma");
// }
// // runing or calling a fucntion
// singSong();

// Arguments
// function greet(name) {
//   console.log(`hey, ${name}`);
// }
// greet("kalp");
// function fullname(firstname, lastname) {
//   console.log(`hey, ${firstname} ${lastname[0]}.`);
// }
// fullname("kalp", "Rambhia");

// function repeat(str, numTimes) {
//   let result = "";
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }
// repeat("kalp is the best! ", "5");

// return keyword
// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return false;
//   }
//   let sum = x + y;
//   return sum;
// }
// let sum = add(22, 3);
// console.log(sum);
// console.log(add(add(1, 5), 7));

//=====================================
// FUNCTION SCOPE
// =====================================

// let totaleggs = 0;
// function collecteggs() {
//   totaleggs = 22;
// }
// // yeh wala function ke calling ke phele hai and uske scope ke bhar hai
// console.log(totaleggs);
// collecteggs();
// // yeh wala function ke scope main hai
// console.log(totaleggs);

// let bird = "crow";
// function birdWatch() {
//   let bird = "sparrow";
//   console.log(bird);
// }
// console.log(bird);
// birdWatch();

//=====================================
// BLOCK SCOPE
// =====================================

// let radius = 8;
// if (radius > 0) {
//   const pi = 3.14159;
//   let msg = "HIII!";
// }
// console.log(radius);
// // yeh msg show nahi hoga kyu ki yeh if (block) ke scope ke bhar hai
// console.log(msg);

// for (let i = 0; i < 5; i++) {
//   // when we use var keyword then that varible is scoped to the function but it is not scoped to block
//   var msg = "hellllllooooo";
//   console.log(msg);
// }
// // as var use hua hai toh yeh niche wala bhi print hoga
// console.log(msg);

//======================================
// LEXICAL SCOPE
// =====================================

// function bankRobbery() {
//   const heroes = ["superman", "batman", "spiderman", "ironman"];
//   function Help() {
//     for (let hero of heroes) {
//       console.log(`pls help us ${hero.toUpperCase()}`);
//     }
//     cryForHelp();
//   }
// }
// bankRobbery();

//======================================
// FUNCTION EXPRESSION
// =====================================
// const add = function (x, y) {
//   console.log(x + y);
//   return x + y;
// };
// add(9, 8);

//======================================
// HIGHER ORDER FUNCTION
// =====================================

// function callTwice(func) {
//   func();
//   func();
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }
// callTwice(rollDie);

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }
// callTenTimes(rollDie);

//======================================
//RETURNING FUNCTION
// =====================================

// function makeMysteryFunc() {
//   const random = Math.random();
//   if (random > 0.5) {
//     return function () {
//       console.log("ITS A GOOD FUNCTION");
//     };
//   } else {
//     return function () {
//       console.log("ITS A BAD FUNCTION ");
//       alert("stop trying to close this window");
//       alert("stop trying to close this window");
//       alert("stop trying to close this window");
//       alert("stop trying to close this window");
//       alert("stop trying to close this window");
//       alert("stop trying to close this window");
//     };
//   }
// }
// const mystery = makeMysteryFunc();
// console.log(mystery);

// function makeBtweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const isChild = makeBtweenFunc(0, 18);
// isChild(40); // false
// isChild(8); // true

//======================================
//DEFINING METHODS
// =====================================

// const myMath = {
//   pi: 3.14159,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };
// myMath.square(5) will give ans of 25

//======================================
// KEYWORD 'THIS'
// =====================================

// const cat = {
//   name: "tommy",
//   color: "grey",
//   breed: "scottish fold",
//   meow() {
//     console.log(`this is`, this);
//     console.log(`${this.name} says MEOWWWW!`);
//   },
// };

// // now when we call meow2 it just says ('says MEOWWWW!') it does not call tommy as jab hum cat.meow(); bula te hai then woh keyword cat dot ke phele matter karta hai as yeh bata hai ki object yeh wale varibale se lena hai

// const meow2 = cat.meow;

//======================================
// TRY AND CATCH
// =====================================

// so what it does is if anything is wrong in try then catch is called or displayed
try {
  hello.toUpperCase();
} catch {
  console.log("ERROR!!");
}
