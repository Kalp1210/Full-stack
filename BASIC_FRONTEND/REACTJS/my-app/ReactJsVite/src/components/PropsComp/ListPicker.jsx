import React from "react";

const ListPicker = ({ values }) => {
  const randIdx = Math.floor(Math.random() * values.length) + 1;
  const randElement = values[randIdx];
  return (
    <div>
      <p>The list of values :{values}</p>
      <p>The random element is :{randElement}</p>
    </div>
  );
};

export default ListPicker;
