import React from "react";

const DoubleDice = () => {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const result = num1 === num2 ? "YOU WIN!!" : "YOU LOSE xD";
  //   if (num1 === num2) {
  //     return (
  //       <div>
  //         <h2>YOU WIN!!</h2>
  //         <p>Num1: {num1}</p>
  //         <p>Num2: {num2}</p>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div>
  //       <h2>YOU LOSE xD</h2>
  //       <p>Num1: {num1}</p>
  //       <p>Num2: {num2}</p>
  //     </div>
  //   );
  return (
    <div>
      <h2>{result}</h2>
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
};

export default DoubleDice;
