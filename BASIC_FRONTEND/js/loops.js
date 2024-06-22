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
const animals = ["lion", "tiger", "whale", "cow", "dog", "cat", "deer"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// nested loops
// for (let i = 1; i <= 5; i++) {
//   console.log(`i is:${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`      j is:${j}`);
//   }
// }

// using nested loop to access data of array in array
const seatingChart = [
  ["jack", "kalp", "harry"],
  ["palash", "yuma", "kevin", "deep"],
  ["nanny", "alia", "tommy", "oreo"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}


// ==================================
// WHILE LOOP
// ==================================

 