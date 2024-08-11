import "./Die.css";
import React from "react";

function Die({ val, color = "slateblue" }) {
  return (
    <div className="die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}

export default Die;
