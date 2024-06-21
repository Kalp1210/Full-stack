let days = ["monday", "tuesday", "wednesday"];
let colors = ["rad", "blue", "green", "yellow", "black"];

colors[0] = "red";
// methods
// push adds to array at the end
days.push("thursday");
days.push("friday");
// pop removes item in array from the end
days.pop();

// shift removes item in array from the start
colors.shift();
// unshift adds to array form the start
colors.unshift("white");

// concatenating 2 arrays
let array1 = [1, 12, 34, 56, "cat", "dog", 91, 0];
let array2 = ["hello", "world", 45, 98, "ggwp"];
let concatarray = array1.concat(array2);
let include = array1.includes(12);
// reverse the array
array2.reverse();

// slice of array
let slicearray = array1.slice(2, 6);

// splice syntax: splice(starting index,number of things you wanna delete and thing you want to add after the starting index)

let splicearray1 = array2.splice(2, 1);
let splicearray2 = array1.splice(5, 0, "animals");

// multidimensional array or nested array
const game = [
  [0, 1, 2],
  ["hello", "hi"],
  ["bat", 3, 4],
];
