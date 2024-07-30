import React from "react";

const Greeter = ({ person, from }) => {
  console.log(person);
  return (
    <div>
      <h1>Hi there, {person}</h1>
      <h2>from {from}</h2>
    </div>
  );
};

export default Greeter;
