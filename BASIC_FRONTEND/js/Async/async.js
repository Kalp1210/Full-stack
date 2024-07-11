//======================================
//             **ASYNC**
// =====================================

// const { timeout, reject, someLimit } = require("async");

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

//======================================
// Promies
// =====================================
// promise intro wale file main hai

//======================================
// Creating Promies
// =====================================
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("YOUR FAKE DATA IS HERE");
//       }
//       reject("REQUEST ERROR!!");
//     }, 1000);
//   });
// };
// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("done with the request!!");
//     console.log("data is : ", data);
//   })
//   .catch((err) => {
//     console.log("ohhhh nooo!!", err);
//   });

const promsieColorChange = (color, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, time);
  });
};

const promiseBtn = document.querySelector("#promiseBtn");
promiseBtn.addEventListener("click", function () {
  promsieColorChange("red", 1000)
    .then(() => {
      return promsieColorChange("orange", 1000);
    })
    .then(() => {
      return promsieColorChange("yellow", 3000);
    })
    .then(() => {
      return promsieColorChange("blue", 1000);
    })
    .then(() => {
      return promsieColorChange("green", 1000);
    })
    .then(() => {
      return promsieColorChange("white", 1000);
    });
});

//======================================
//The Async Keyword
// =====================================
async function hello() {
  return "hellloooooo";
}
console.log(hello());

const sing = async () => {
  // throw new Error("oohhh no error");
  // throw "OOHHHH NOOO ERROR!!";
  return "la la la la ";
};

console.log(sing());
sing()
  .then((data) => {
    console.log("promise resolved with :", data);
  })
  .catch((err) => {
    console.log("OOHHH NO, PROMISE REJECTED");
    console.log(err);
  });

const login = async (username, password) => {
  if (!username || !password) throw "missing credentials";
  if (password === "kalpisgreat") return "welcome";
  throw "invalid password";
};

login("hello", "kalpisgreat")
  .then((msg) => {
    console.log("logged in!");
    console.log(msg);
    return login("hello");
  })
  .then((msg) => {
    console.log("logged in!");
    console.log(msg);
    return login("hello", "hjaks");
  })
  .then((msg) => {
    console.log("logged in!");
    console.log(msg);
  })
  .catch((errs) => {
    console.log("error!!");
    console.log(errs);
  });

//======================================
//The await keyowrd
// =======================================

// yeh same upar bhi hai isliye not writing it again
// const promsieColorChange = (color, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, time);
//   });
// };
const awaitBtn = document.querySelector("#awaitBtn");

awaitBtn.addEventListener("click", async function () {
  await promsieColorChange("red", 1000);
  await promsieColorChange("orange", 1000);
  await promsieColorChange("yellow", 1000);
  await promsieColorChange("blue", 1000);
  await promsieColorChange("green", 1000);
  await promsieColorChange("white", 1000);
});
