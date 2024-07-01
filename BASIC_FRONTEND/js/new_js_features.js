//======================================
//new js features
// =====================================

//======================================
//DEFAULT PARAMS
// =====================================
// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }
// if nothing is passed then 6 will be taken as default value

// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

//======================================
//SPREAD IN FUNTION CALLS
// =====================================
// const nums = [13, 1, 2, 3, 6, 55, 6666, 77, 8, 654, 24, 32, 234, 4];
// console.log(Math.max(nums));
// // this ... spreads the arguments into individual and thus it helps to do this
// console.log(...nums);
// console.log(Math.max(...nums));
