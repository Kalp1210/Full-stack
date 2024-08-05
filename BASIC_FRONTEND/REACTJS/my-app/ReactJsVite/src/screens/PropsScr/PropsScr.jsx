import React from "react";
import Greeter from "../../components/PropsComp/Greeter";
import DieProps from "../../components/PropsComp/DieProps";
import ListPicker from "../../components/PropsComp/ListPicker";
import DoubleDice from "../../components/PropsComp/DoubleDice";
import Heading from "../../components/PropsComp/Heading";
import ColorList from "../../components/PropsComp/ColorList";
import ShoppingList from "../../components/PropsComp/ShoppingList";
import Clicker from "../../components/PropsComp/Clicker";
import Form from "../../components/PropsComp/Form";

// for SHOPPING LIST
const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "carrot", quantity: 10, completed: true },
  { id: 4, item: "cheese", quantity: 6, completed: false },
];
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

      {/* <DoubleDice /> */}

      <Heading color="magenta" text="Welcome!" />

      {/* <ColorList colors={["red", "pink", "purple", "teal"]} /> */}

      {/* SHOPIING LIST */}

      {/* <ShoppingList items={data} /> */}

      {/* <Clicker /> */}

      <Form />
    </div>
  );
};

export default PropsScr;
