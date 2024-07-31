import React from "react";

const ColorList = ({ colors }) => {
  //   const lis = colors.map((color) => <li>{color}</li>);
  return (
    <div>
      <p>Color List</p>
      <ul>
        {colors.map((color) => (
          <li style={{ color: color }}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
