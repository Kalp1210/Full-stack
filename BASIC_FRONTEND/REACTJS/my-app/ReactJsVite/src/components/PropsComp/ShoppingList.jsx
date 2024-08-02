import React from "react";
import ShoppingListItems from "./ShoppingListItems";
const ShoppingList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((i) => (
          // <li
          //   key={i.id}
          //   style={{
          //     color: i.completed ? "grey" : "red",
          //     fontWeight: 600,
          //     textDecoration: i.completed ? "line-through" : "",
          //   }}
          // >
          //   {i.item} - {i.quantity}
          // </li>
          <ShoppingListItems
            key={i.id}
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
