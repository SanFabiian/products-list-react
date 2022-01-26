import React from "react";

const ShoppingSearch = ({ inputValue, setInputValue }) => {
  const onSearchValue = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
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
