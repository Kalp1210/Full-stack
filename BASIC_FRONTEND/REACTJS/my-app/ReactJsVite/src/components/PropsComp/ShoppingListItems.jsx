import React from "react";

const ShoppingListItems = (item, quantity, completed) => {
  return (
    <div>
      <li>
        {item} - {quantity}
      </li>
    </div>
  );
};

{
  /* <li
        key={i.id}
        style={{
          color: i.completed ? "grey" : "red",
          fontWeight: 600,
          textDecoration: i.completed ? "line-through" : "",
        }}
      >
        {i.item} - {i.quantity}
      </li> */
}
export default ShoppingListItems;
