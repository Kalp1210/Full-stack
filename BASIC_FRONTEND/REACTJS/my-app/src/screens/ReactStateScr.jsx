import React from "react";
import Counter from "../components/ReactStateComp/Counter";
import Toggler from "../components/ReactStateComp/Toggler";
import TogglerCounter from "../components/ReactStateComp/TogglerCounter";
import Dumbo from "../components/ReactStateComp/Dumbo";

const ReactStateScr = () => {
  return (
    <div>
      <h2>ReactStateScr</h2>

      {/* BASIC state  */}

      {/* <Counter /> */}
      {/* <Toggler /> */}
      {/* <TogglerCounter /> */}

      {/* intermediate state  */}
      <p>doubt hai in Counter</p>
      <Counter />

      <Dumbo />
    </div>
  );
};

export default ReactStateScr;
