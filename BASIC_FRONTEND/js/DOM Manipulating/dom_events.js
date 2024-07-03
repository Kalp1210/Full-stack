const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("you clicked me!!");
  alert("it worked because of js");
};
function scream() {
  console.log("place the cursor somewhere else");
  //   alert("aaaaahhhhhhhhhh!!!!1");
}
btn.onmouseenter = scream;
