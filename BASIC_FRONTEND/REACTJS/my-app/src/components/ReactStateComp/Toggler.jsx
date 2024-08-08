import React, { useState } from "react";
import "./TogglerStyle.css";
const Toggler = () => {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <div>
      Toggler
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😊" : "😭"}
      </p>
    </div>
  );
};

export default Toggler;
