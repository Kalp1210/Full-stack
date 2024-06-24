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
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}
let sum = add(22, 3);
console.log(sum);
console.log(add(add(1, 5), 7));
