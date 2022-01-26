import React, { useContext } from "react";
import { ContextListProducts } from "../context/ContextListProducts";

const ShoppingSearch = () => {
  const { inputValue, setInputValue } = useContext(ContextListProducts);

  const onSearchValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      placeholder="Nombre de producto"
      className="input-group-text text-center mx-auto"
      value={inputValue}
      onChange={onSearchValue}
    />
  );
};

export { ShoppingSearch };
