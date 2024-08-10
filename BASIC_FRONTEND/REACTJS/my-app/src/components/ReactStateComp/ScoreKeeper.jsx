import React, { useState } from "react";

const ScoreKeeper = () => {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  function incrP1Score() {
    // the score is increased by one but is not shown in the text format beacuse we are using object here
    // scores.p1Score += 1;
    // console.log(scores);
    // setScores(scores);

    setScores((oldScores) => {
      return { ...oldScores, p1Score: oldScores.p1Score + 1 };
    });
  }
  function incrP2Score() {
    setScores((oldScores) => {
      return { ...oldScores, p2Score: oldScores.p2Score + 1 };
    });
  }
  return (
    <div>
      ScoreKeeper
      <p>Player 1 :{scores.p1Score}</p>
      <p>Player 2 :{scores.p2Score}</p>
      <button onClick={incrP1Score}>+1 Player 1</button>
      <button onClick={incrP2Score}>+1 Player 2</button>
    </div>
  );
};

export default ScoreKeeper;
