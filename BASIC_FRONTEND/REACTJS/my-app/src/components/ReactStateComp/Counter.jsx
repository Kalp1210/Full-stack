import React, { useState } from "react";

const Counter = () => {
  // **BASIC STATE CONCEPTS**

  // const IncrementNum = () => (num += 1);
  // const [num, setNum] = useState(0);
  // // const num = arr[0];
  // // const setNum = arr[1];
  // // console.log(arr);
  // // let num = 0;
  // function changeNum() {
  //   setNum(num + 1);
  // }
  // return (
  //   <div>
  //     Counter
  //     <p>The count is :{num}</p>
  //     <button onClick={changeNum}>Increment!</button>
  //   </div>
  // );

  // **INTERMEDIATE STATE CONCEPTS**

  const [count, setCount] = useState(0);
  function addOne() {
    setCount(count + 1);
  }
  function setToTen() {
    setCount(10);
  }
  function addThree() {
    // this will not add three as till the function ends the count is till its og number
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // now isme each time value of count is updated to current count
    // DOUBT HAI ISME
    setCount((andupondugondu) => andupondugondu + 1);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }
  return (
    <div>
      Counter
      <p>The count is :{count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
      <button onClick={setToTen}>Set To Ten</button>
    </div>
  );
};

export default Counter;
