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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// what this does is it creates a new array for the end result of the function
const doubles = numbers.map(function (num) {
  return num * 2;
});
