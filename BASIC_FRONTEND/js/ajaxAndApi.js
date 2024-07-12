//======================================
//          **AJAX AND API**
// =====================================

//======================================
// MAKING XHR'S
// =====================================

// const req = new XMLHttpRequest();
// req.onload = function () {
//   console.log("IT LOADED!!");
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// };
// req.onerror = function () {
//   console.log("OOHH NO THERE IS AN ERROR!!");
//   console.log(this);
// };

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

//======================================
// USING THE FETCH API
// =====================================

// fetch returns a promise
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("resolved!!", res);
//     // json() also returns a promise
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON DONE 1!!", data);
//     return fetch("https://swapi.dev/api/people/4/");
//   })
//   .then((res) => {
//     console.log("second request resolved!!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON DONE 2!!", data);
//   })
//   .catch((e) => {
//     console.log("oops error!!", e);
//   });

// using async function
// const starWarsPeople = async () => {
//   try {
//     const res1 = await fetch("https://swapi.dev/api/people/1/");
//     const data1 = await res1.json();
//     console.log(data1);
//     const res2 = await fetch("https://swapi.dev/api/people/4/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("oopps error!!", e);
//   }
// };
// starWarsPeople();

//======================================
// INTRO TO AXIOS
// =====================================
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE!", res);
//   })
//   .catch((e) => {
//     console.log("ohhhh no error!!");
//   });

// const starWars = async (id) => {
//   const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//   console.log(res.data);
// };
// starWars(1);
// starWars(4);

//======================================
// SETTING HEADERS WITH AXIOS
// =====================================

const getDadJokes = async () => {
  const config = { header: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(res.data.joke);
};
getDadJokes();
