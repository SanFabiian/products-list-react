import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ContextListProducts = React.createContext();

const ProductsProvider = (props) => {
  const [products, saveProducts] = useLocalStorage("PRODUCTS_V1", []);
  const [inputValue, setInputValue] = useState("");

  const totalProducts = products.length;
  let searcherProduct = [];

  if (!searcherProduct.length > 0) {
    searcherProduct = products.filter((product) => {
      const productText = product.name.toLowerCase();
      const searchText = inputValue.toLowerCase();
      return productText.includes(searchText);
    });
  }

  const addProduct = (text) => {
    const newProduct = [...products];

    const idProduct = () => Date.now();
    newProduct.push({
      id: idProduct(),
      name: text,
    });
    saveProducts(newProduct);
  };

  const deleteProduct = (name) => {
    const productIndex = products.findIndex((product) => product.name === name);
    const newProduct = [...products];
    newProduct.splice(productIndex, 1);
    saveProducts(newProduct);
  };

  return (
    <ContextListProducts.Provider
      value={{
        products,
        saveProducts,
        inputValue,
        setInputValue,
        totalProducts,
        addProduct,
        deleteProduct,
        searcherProduct,
      }}
    >
      {props.children}
    </ContextListProducts.Provider>
  );
};

export { ContextListProducts, ProductsProvider };
