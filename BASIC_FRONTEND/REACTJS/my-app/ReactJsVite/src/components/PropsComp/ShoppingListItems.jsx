import React from "react";

const ShoppingListItems = ({ item, quantity, completed }) => {
  const styles = {
    color: completed ? "grey" : "red",
    fontWeight: 600,
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <div>
      <li style={styles}>
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

// ShoppingListItems.PropTypes = {
//   item: PropTypes.string,
//   quantity: PropTypes.number,
//   completed: PropTypes.bool,
// };
export default ShoppingListItems;
