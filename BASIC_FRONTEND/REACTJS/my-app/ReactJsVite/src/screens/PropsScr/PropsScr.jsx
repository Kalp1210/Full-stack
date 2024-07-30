import React from "react";
import Greeter from "../../components/PropsComp/Greeter";
import DieProps from "../../components/PropsComp/DieProps";
import ListPicker from "../../components/PropsComp/ListPicker";
import DoubleDice from "../../components/PropsComp/DoubleDice";

const PropsScr = () => {
  return (
    <div>
      <h2>PropsScr</h2>
      {/* <Greeter person="Kalp" from="palash" /> */}
      {/* <DieProps numSides={20} />
      <DieProps />
      <DieProps numSides={100} /> */}

      {/* <ListPicker values={[1, 2, 3, 4]} />
      <ListPicker values={["a", "b", "c"]} /> */}

      <DoubleDice />
    </div>
  );
};

export default PropsScr;
