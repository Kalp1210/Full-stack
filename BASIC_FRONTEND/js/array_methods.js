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

// const prices = [9.99, 19.99, 8.5, 50.89, 30.6, 1.5];

// one way to add the prices is
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const prices = [9.99, 19.99, 8.5, 50.89, 30.6, 1.5];
// using reduce we can do it in the folowing way
// const total = prices.reduce((total, price) => {
//   return total + price;
// });
// console.log(total);

// const prices = [9.99, 19.99, 8.5, 50.89, 30.6, 1.5];
// we can use reduce to find biggest or smallest nos in array
// const minPrice = prices.reduce((min, price) => {
//   if (price < min) {
//     return price;
//   }
//   return min;
// });

//======================================
//ARROW FUNCTION AND THIS
// =====================================

// const person = {
//   firstName: "jack",
//   lastName: "decker",
//   //   fullName: function () {
//   //     return `${this.firstName} ${this.lastName}`;
//   //   },

//   // yeh niche wale case main it wont work because of arrow function
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
