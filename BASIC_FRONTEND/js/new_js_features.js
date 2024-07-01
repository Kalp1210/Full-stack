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

//======================================
//SPREAD WITH ARRAY LITERALS
// =====================================

// const cats = ["blue", "scout", "roket"];
// const dogs = ["red", "tommy", "oreo"];
// // yeh add karega dono arrays ko
// const allPets = [...cats, ...dogs];
// console.log(allPets);

//======================================
//SPREAD WITH OBJECTS
// =====================================
// const feline = {
//   legs: 4,
//   family: "felidae",
// };
// const canine = {
//   isFurry: true,
//   families: "caninae",
// };
// const catDogs = { ...feline, ...canine, color: "black" };
// console.log(catDogs);

//======================================
//REST PARAMS
// =====================================
// below wala doesnt work
// function sun() {
//   return arguments.reduce((total, el) => total + el);
// }

// function sum(...nums) {
//   console.log(nums);
//   console.log(nums.reduce((total, el) => total + el));
// }
// // sum(33, 22, 12, 23, 34, 22);

//======================================
//DESTRUCTURING ARRAYS
// =====================================
// const scores = [98075, 93998, 92209, 83231, 78908, 56753];
// const [gold, silver, bronze, ...everyoneElse] = scores;
// console.log(sgold);
// console.log(silver);
// console.log(bronze);
// console.log(everyoneElse);

//======================================
//DESTRUCTURING OBJECTS
// =====================================
// const user = {
//   email: "hello@gmail.com",
//   password: "kalp_2912",
//   firstName: "kalp",
//   lastName: "jordan",
//   born: 1987,
//   city: "mumbai",
//   Age: 77,
// };
// // this is one thing we can do
// // const firstName = user.firstName;

// const { password, born: birthyear } = user;
// console.log(password);
// console.log(birthyear);

//======================================
//DESTRUCTURING PARAMS
// =====================================

// const user = {
//   email: "hello@gmail.com",
//   password: "kalp_2912",
//   firstName: "kalp",
//   lastName: "jordan",
//   born: 1987,
//   city: "mumbai",
//   Age: 77,
// };
// function fullName({ firstName, lastName }) {
//   console.log(`${firstName} ${lastName}`);
// }
// fullName(user);
