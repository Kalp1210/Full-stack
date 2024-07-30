import React from "react";
import Die from "./Die";
import "./DieRolls.css";

export default function DiceRolls() {
  return (
    <div className="DieRolls">
      <Die />
      <Die />
      <Die />
    </div>
  );
}
