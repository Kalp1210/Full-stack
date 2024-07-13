//======================================
//     **prototype , Class & OOP**
// =====================================

//======================================
// Intro To Prototypes
// =====================================
// basically it shows all the prototyes of string and array like concat or push
// console.log(string.prototype);
// console.log(Array.prototype);

// String.prototype.yell = function () {
//   alert(this.toUpperCase());
// };
// const hello = "hello!!";
// // hello.yell();

// // we can overwrite the og methods
// Array.prototype.pop = function () {
//   return console.log("sorry i want that element, i will never pop it off!!");
// };
// const numbers = [1, 2, 3, 4];
// numbers.pop();

//======================================
// FACTORY FUNCTION
// =====================================

// yeh as it is copied hai it's meaning u might not understand
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// it will convert rgb color to hex color
console.log(hex(255, 100, 25));
// #ff6419 yeh ans hoga upar wale ka
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    // we can write the above one rather then writting :
    // return `rgb (${this.r}${this.g}${this.b})`
  };
  color.hex = function (r, g, b) {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}
const firstColor = makeColor(35, 35, 35);
firstColor;
firstColor.hex();
