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

// ======================================
// CHANGING STYLES
// ======================================
// isme css wale style nahi dhekenge sirf joh inline styles hai woh dheek te hai
// const h1 = document.querySelector("h1");
// console.log(h1.style);
// console.log((h1.style.color = "green"));
// console.log((h1.style.fontSize = "3em"));

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}
// this will give us all the style the h1 has even in the css
// console.log(window.getComputedStyle(h1));
// console.log(window.getComputedStyle(h1).fontSize);

// ======================================
// CLASSLIST
// ======================================
// const h2 = document.querySelector("h2");
// // console.log(h2.getAttribute("class"));

// // // this is linked with css line 35
// // // aab h2 joh hai phela wala uska color will change to purple kyu ki css main ek class defined hai as purple

// // console.log(h2.setAttribute("class", "purple"));
// // console.log(h2.setAttribute("class", "border"));
// console.log(h2.classList);

// // isse apan multiple class asign karsakte hai at the same time
// console.log(h2.classList.add("purple", "border"));
// console.log(h2.classList);
// console.log(h2.classList.remove("purple"));
// console.log(h2.classList);

// // contains tells us if the class is there or no
// console.log(h2.classList.contains("purple"));
// console.log(h2.classList.toggle("purple"));

// ======================================
//TRAVERSING PARENT/CHILD/SIBLING
// ======================================

// const firstBold = document.querySelector("b");
// console.log(firstBold);
// console.log(firstBold.parentElement);
// console.log(firstBold.parentElement.parentElement);
// console.log(firstBold.parentElement.parentElement.parentElement);
// const para = firstBold.parentElement;
// console.log(para.children);

// const firstImg = document.querySelector(".square");
// console.log(firstImg.nextSibling);
// console.log(firstImg.previousSibling);
// // niche wale main we dont consider nodes
// console.log(firstImg.nextElementSibling);

// ======================================
//APPEND AND APPENDCHILD
// ======================================

// const newImg = document.createElement("img");
// console.log(newImg);
// console.log(
//   (newImg.src =
//     "https://images.unsplash.com/photo-1719952167476-d229531f3dab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// );
// console.log(document.body.appendChild(newImg));
// console.log(newImg.classList.add("square"));

// const p = document.querySelector("p");
// console.log(
//   p.append("!!!!!!!!!!!!!! I am new text yaaaaaaayyyyyyyyyyyy!!!!!!!!!!!!!!!")
// );

// console.log(
//   p.prepend("!!!!!!!!!!!!!! I am new text yaaaaaaayyyyyyyyyyyy!!!!!!!!!!!!!!!")
// );

// const newh2 = document.createElement("h2");
// console.log(
//   newh2.append(
//     "!!!!!!!!!!!!!! I am new text yaaaaaaayyyyyyyyyyyy!!!!!!!!!!!!!!!"
//   )
// );
// const h1 = document.querySelector("h1");
// h1.insertAdjacentElement("afterend", newh2);

// ======================================
//APPEND AND APPENDCHILD
// ======================================

// const firstLi = document.querySelector("li");
// console.log(firstLi);
// const ul = firstLi.parentElement;
// console.log(ul);
// // ul.removeChild(firstLi);
// firstLi.remove();
