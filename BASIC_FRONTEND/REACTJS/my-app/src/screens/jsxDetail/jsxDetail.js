import React from "react";
import Greeter from "../../components/jsxDetailComp/Greeter";
import Dog from "../../components/jsxDetailComp/dog";
import Die from "../../components/jsxDetailComp/Die";
import DiceRolls from "../../components/jsxDetailComp/DiceRolls";
import LoginForm from "../../components/jsxDetailComp/loginForm";

const JsxDetail = () => {
  return (
    <div>
      <LoginForm />
      <Greeter />
      <Greeter />
      <Dog />
      <Die />
      <DiceRolls />
      <DiceRolls />
    </div>
  );
};

export default JsxDetail;
