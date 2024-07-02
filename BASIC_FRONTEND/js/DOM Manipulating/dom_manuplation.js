// ======================================
//          **DOM MANUPLATION**
// ======================================

// ======================================
// GETELEMENTS BY ID/TAG/CLASS NAME
// ======================================
// BY ID
// let img = document.getElementById("banner");
// console.log(img);
// console.dir(banner);

// BY TAG
// let allImg = document.getElementsByTagName("img");
// console.log(allImg);
// console.dir(allImg[1]);

// let allImg = document.getElementsByTagName("img");
// for (let img of allImg) {
//   console.log(img.src);
// }

// BY CLASS
// let cImg = document.getElementsByClassName("square");
// console.log(cImg);

// ======================================
// QUERYSELECTOR AND QUERYSELECTORALL
// ======================================

// QUERYSELECTOR
// sirf first wala select hoga apne indvidual isme se suppose 2 p hai toh sirf 1st wala p select hoga
// let qImg = document.querySelector("p");
// console.log(qImg);
// // id and class select karne ko css wale rules use honge iske liye
// let bannerImg = document.querySelector("#banner");
// console.log(bannerImg);
// let squareImg = document.querySelector(".square");
// console.log(squareImg);

// // QUERYSELECTORALL
// // isme saab select karega
// let allP = document.querySelectorAll("p");
// console.log(allP);
// // iska matalb hua p of a yani ki sab anchor tags joh p main hai
// let links = document.querySelectorAll("p a");
// for (linking of links) {
//   console.log(linking.href);
// }

// ======================================
// INNERHTML,TEXTCONTENT,AND INNERTEXT
// ======================================
// console.log(document.querySelector("p").innerText);
// console.log((document.querySelector("p").innerText = "lolololol"));
// in textcontent we have spaces due to the markup
// console.log(document.querySelector("p").textContent);

const allLinks = document.querySelectorAll("a");

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// // this allows us to use htlm tags
// document.querySelector("h1").innerHTML = "<i>hello world</i>";

// ======================================
// ATTRIBUTES
// ======================================
// now the id is changed to whoops
// document.querySelector("#banner").id = "whoops";
// src is the attribute we are accessing
// let source= document.querySelector("#banner").src;
// let firstLink = document.querySelector("a");
// console.log(firstLink.href);
// console.log(firstLink.getAttribute("href"));
