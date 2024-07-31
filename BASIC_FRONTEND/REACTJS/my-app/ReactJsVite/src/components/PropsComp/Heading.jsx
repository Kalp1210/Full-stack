import React from "react";

function Heading({ color = "olive", text }) {
  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
    </div>
  );
}

export default Heading;
