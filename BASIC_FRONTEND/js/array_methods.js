//======================================
// THE FOREACH METHOD
// =====================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// what this does is array ke each element ke liye it will perform this function

// numbers.forEach(function (element) {
//   console.log(element);
// });

//======================================
// THE MAP METHOD
// =====================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // what this does is it creates a new array for the end result of the function

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

//======================================
// ARROW FUNCTION
// =====================================

// iske liye function keyword nahi lhikna padta
// const add = (x, y) => {
//   console.log(x + y);
//   return x + y;
// };
// add(9, 5);

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };
// rollDie();

// we dont need to write return keyword just use normal brackets rather then curly bracts

// const rollDie = () => (Math.floor(Math.random() * 6) + 1)
// rollDie();

// const add = (x, y) => x + y;

//======================================
// SETTIMEOUT AND SETINTERVAL
// =====================================

// console.log("hello!!.....");
// setTimeout(() => {
//   console.log("....are you still there?");
// }, 3000);
// console.log("goodbye!!!!");

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);
// if we wanna stop this loop then just type clearinterval(id)then thiss will stop

//======================================
// THE FILTER METHOD
// =====================================

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const lessThenTen = number.filter((n) => {
//   return n < 10;
// });

//======================================
// SOME AND EVERY KEYWORDS
// =====================================

// they only return true and false

// const examScore = [90, 60, 77, 56, 87, 72, 33, 66, 45, 28, 93];
// examScore.every((score) => score >= 75);
// examScore.some((score) => score >= 75);

//======================================
//THE REDUCE METHOD
// =====================================
