// ======================================
//           **DOM EVENTS**
// ======================================

// ======================================
// ONCLICK PROPERTY
// ======================================

const btn1 = document.querySelector("#v1");
btn1.onclick = function () {
  console.log("you clicked me!!");
  alert("it worked because of js");
};
function scream() {
  console.log("place the cursor somewhere else");
  //   alert("aaaaahhhhhhhhhh!!!!1");
}
btn1.onmouseenter = scream;

// ======================================
// ADDEVENTLISTENER
// ======================================

// we can use this multiple times it will not be overwritten
const btn2 = document.querySelector("#v2");
// btn2.addEventListener("click", function () {
//   alert("clicked!");
// });

function click() {
  console.log("clicked!");
}
function Stop() {
  console.log("stop clicking");
}
// it will only happen once
btn2.addEventListener("click", click, { once: true });
btn2.addEventListener("click", Stop);

// ======================================
// RANDOM COLOR GENERATOR
// ======================================
const colorBtn = document.querySelector("#colorChange");
const colorH1 = document.querySelector("#colorH1");
colorBtn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;
  colorH1.innerText = newColor;
});

// ======================================
// EVENTS AND KEYWORD THIS
// =====================================

// IN DIFFERENT FILE
//

// ======================================
// Keyboard Events & Event Objects
// =====================================
const objBtn = document.querySelector("#eventObject");

objBtn.addEventListener("click", function () {
  alert("click!");
});

// const objInput = document.querySelector("#eventObjectText");
// objInput.addEventListener("keydown", function (E) {
//   console.log(E.code);
//   console.log(E.key);
// });
// objInput.addEventListener("keyup", function () {
//   console.log("keyup!");
// });
// window.addEventListener("keydown", function (e) {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("hi!!");
//       break;
//     case "ArrowDown":
//       console.log("bye!!");
//       break;
//     case "ArrowLeft":
//       console.log("yooooo!!");
//       break;
//     case "ArrowRight":
//       console.log("chilll!!");
//       break;
//     default:
//       console.log("ignore!!");
//   }
// });

// ============================================
//NEW VERSION: Form Events & PreventDefault
// ============================================
const form = document.querySelector("#shelterForm");
const dogText = document.querySelector("#dogText");
const dogsList = document.querySelector("#dogsList");
form.addEventListener("submit", function (forms) {
  forms.preventDefault();
  console.log("submited!");
  console.log(dogText.value);
  const dogName = dogText.value;
  const newLi = document.createElement("Li");
  newLi.innerText = dogName;
  console.log(newLi);
  dogsList.append(newLi);
});

// ======================================
//Input & Change Events
// ======================================