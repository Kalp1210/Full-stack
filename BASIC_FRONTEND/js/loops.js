// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// ================================
// FOR LOOP
// ================================

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// print only even nos for odd nos i=1 se start hoga
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// going downward wala for loop
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// multiplication wala loop
// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

// infinte loop
// DO NOT RUN THIS AT ALL
// ================================
// ================================
// for (let i = 1; i >= 0; i++) {
//   console.log(i);
// }
// ==================================
// ==================================

// accesing data in array with the help of for loop
// const animals = ["lion", "tiger", "whale", "cow", "dog", "cat", "deer"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// nested loops
// for (let i = 1; i <= 5; i++) {
//   console.log(`i is:${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`      j is:${j}`);
//   }
// }

// using nested loop to access data of array in array
// const seatingChart = [
//   ["jack", "kalp", "harry"],
//   ["palash", "yuma", "kevin", "deep"],
//   ["nanny", "alia", "tommy", "oreo"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// ==================================
// WHILE LOOP
// ==================================

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// let input = prompt("hey say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK U WIN");

//// ==================================
// FOR OF LOOP
// ==================================

// const subreddit = ["cringe", "books", "chickens", "funny", "pics", "cricket"];

// for (let i = 0; i < subreddit.length; i++) {
//   console.log(`Vist reddit.com/r/${subreddit[i]}`);
// }

// upar wala same with the help of for of loop
// for loop syntax: for(variable of iterable){
// statement
// }
// for (let sub of subreddit) {
//   console.log(`Vist reddit.com/r/${sub}`);
// }

// easier for nested array accesing data
// const seatingCharts = [
//   ["jack", "kalp", "harry"],
//   ["palash", "yuma", "kevin", "deep"],
//   ["nanny", "alia", "tommy", "oreo"],
// ];

// for (let rows of seatingCharts) {
//   for (let students of rows) {
//     console.log(students);
//   }
// }

// FOR IN LOOP
// ===================================
// only used for object literals as the are non iterable

const testScores = {
  jack: 55,
  kalp: 72,
  harry: 23,
  palash: 34,
  yuma: 45,
  kevin: 66,
  deep: 76,
  tommy: 88,
  oreo: 90,
};

// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]}`);
// }

// if you wanna take avg of scores
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(`the scores are :${scores}`);
console.log(`the total of scores are ${total}`);
console.log(`avg of total scores is ${total / scores.length}`);
