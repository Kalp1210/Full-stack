import React from "react";
function handleClick() {
  alert("clicked the butoon!!");
}
function handleHover() {
  alert("hovered the butoon!!");
}
const Clicker = () => {
  return (
    <div>
      <p>click the button</p>
      <button onClick={handleClick}>Click</button>
      <br />
      <br />
      <button onMouseOver={handleHover}>hover me!</button>
    </div>
  );
};

export default Clicker;
