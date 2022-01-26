import React from "react";

const ShoppingCount = (props) => {
  return (
    <h2 className="text-light text-center p-4">
      {props.totalProducts > 0
        ? `Tienes ${props.totalProducts} productos por comprar`
        : "Agrega productos a la lista"}
    </h2>
  );
};

export { ShoppingCount };
