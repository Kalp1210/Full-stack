import React, { useState } from "react";

function generateGameBoard() {
  console.log("MAKING THE INTIAL  GAME BOARD");
  return Array(5000);
}

const Dumbo = () => {
  const [board, setBoard] = useState(generateGameBoard());
  return (
    <div>
      <p>Dumbo</p>
      <button onClick={() => setBoard("hello")}>
        Click me to change state
      </button>
    </div>
  );
};

export default Dumbo;
