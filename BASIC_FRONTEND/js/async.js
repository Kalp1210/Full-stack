//======================================
//             **ASYNC**
// =====================================

//======================================
//The Call Stack
// =====================================

// mutliple fucntions ke andar function
const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);
console.log("before");
console.log(isRightTriangle(3, 4, 5));
console.log(isRightTriangle(3, 6, 8));
console.log("after");

//======================================
// WebAPIs & Single Threaded
// =====================================

// yeh settimeout wala task js browser ko dede deta hai and khud agla task main lag jata hai and after 3 sec here as per example browser js ko yaad dilata hai ki yeh task hai and then js usko perform karta hai

// console.log("sending request to server!");
// setTimeout(() => {
//   console.log("here is your data from the server....");
// }, 3000);
// console.log("i am at the end of file");

//======================================
// Callback Hell
// =====================================
// document.body.style.backgroundColor = "red";

const colorChangeBtn = document.querySelector("#colorChangeBtn");
// colorChangeBtn.addEventListener("click", function () {
//   setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "orange";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "green";
//             setTimeout(() => {
//               document.body.style.backgroundColor = "white";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });
// document.body.style.backgroundColor = "orange";
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

colorChangeBtn.addEventListener("click", function () {
  delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
      delayedColorChange("yellow", 3000, () => {
        delayedColorChange("blue", 1000, () => {
          delayedColorChange("green", 1000, () => {
            delayedColorChange("white", 1000, () => {});
          });
        });
      });
    });
  });
});

// example of real case use

// searchmoviesAPI('tiger', ()=>{
//     saveToMyDB(moives, ()=>{
//     //  if it works, run this
//     }, ()=>{
//     //  if it doesnt work, run this
//     },()=>{
// //    if API is down, or request failed, run this
//     })
// })
