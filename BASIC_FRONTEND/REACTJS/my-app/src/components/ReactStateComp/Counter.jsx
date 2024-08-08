import React, { useState } from "react";

const Counter = () => {
  // const IncrementNum = () => (num += 1);
  const [num, setNum] = useState(0);
  // const num = arr[0];
  // const setNum = arr[1];
  // console.log(arr);
  // let num = 0;
  function changeNum() {
    setNum(num + 1);
  }
  return (
    <div>
      Counter
      <p>The count is :{num}</p>
      <button onClick={changeNum}>Increment!</button>
    </div>
  );
};

export default Counter;
