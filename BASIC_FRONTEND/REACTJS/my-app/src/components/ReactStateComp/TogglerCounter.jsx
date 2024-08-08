import React, { useState } from "react";

const TogglerCounter = () => {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(9);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 2);
  return (
    <div>
      TogglerCounter
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😊" : "😭"}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default TogglerCounter;
