import React from "react";
function handleFormSubmit(e) {
  e.preventDefault();
  alert("Submited The Form!!");
}
const Form = () => {
  return (
    <form>
      <button onSubmit={handleFormSubmit}>Submit!</button>
    </form>
  );
};

export default Form;
