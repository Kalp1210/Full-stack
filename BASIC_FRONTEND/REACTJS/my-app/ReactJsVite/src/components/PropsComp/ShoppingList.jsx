import React from "react";

const ShoppingList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((i) => (
          <li
            key={i.id}
            style={{
              color: i.completed ? "grey" : "red",
              fontWeight: 600,
              textDecoration: i.completed ? "line-through" : "",
            }}
          >
            {i.item} - {i.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
