import React from "react";

const ShoppingList = (props) => {
  return (
    <section className="ShoppingList">
      <ul className="p-0">{props.children}</ul>
    </section>
  );
};

export { ShoppingList };
