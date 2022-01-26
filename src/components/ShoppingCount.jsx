import React, { useContext } from "react";
import { ContextListProducts } from "../context/ContextListProducts";

const ShoppingCount = () => {
  const { totalProducts } = useContext(ContextListProducts);
  return (
    <h2 className="text-light text-center p-4">
      {totalProducts > 0
        ? `Tienes ${totalProducts} productos por comprar`
        : "Agrega productos a la lista"}
    </h2>
  );
};

export { ShoppingCount };
