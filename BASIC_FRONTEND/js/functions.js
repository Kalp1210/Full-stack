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
