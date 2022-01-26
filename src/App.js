import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import { ShoppingCount } from "./components/ShoppingCount";
import { ShoppingSearch } from "./components/ShoppingSearch";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingAddProduct } from "./components/ShoppingAddProduct";
import { ShoppingItem } from "./components/ShoppingItem";

function App() {
  //Create a new local storage
  const localStorageProducts = localStorage.getItem("PRODUCTS_V1");
  let parsedProducts;

  if (!localStorageProducts) {
    localStorage.setItem("PRODUCTS_V1", JSON.stringify([]));
    parsedProducts = [];
  } else {
    parsedProducts = JSON.parse(localStorageProducts);
  }

  // const productsTest = [
  //   {
  //     name: "panela",
  //   },
  //   {
  //     name: "Pan",
  //   },
  //   {
  //     name: "Arroz",
  //   },
  //   {
  //     name: "sal",
  //   },
  // ];

  // App state
  const [products, setProducts] = useState(parsedProducts);
  const [inputValue, setInputValue] = useState("");

  const totalProducts = products.length;
  let searcherProduct = [];

  if (searcherProduct.length > 0) {
    searcherProduct = products;
  } else {
    searcherProduct = products.filter((product) => {
      const productText = product.name.toLowerCase();
      const searchText = inputValue.toLowerCase();

      return productText.includes(searchText);
    });
  }

  //Methods items

  const saveProducts = (newProduct) => {
    const stringifyProducts = JSON.stringify(newProduct);
    localStorage.setItem("PRODUCTS_V1", stringifyProducts);
    setProducts(newProduct);
  };

  const deleteProduct = (name) => {
    const productIndex = products.findIndex((product) => product.name === name);
    const newProduct = [...products];
    newProduct.splice(productIndex, 1);
    saveProducts(newProduct);
  };

  return (
    <main className="container">
      <ShoppingCount totalProducts={totalProducts} />
      <ShoppingSearch inputValue={inputValue} setInputValue={setInputValue} />
      <ShoppingList>
        {searcherProduct.map((item) => (
          <ShoppingItem
            key={item.name}
            product={item.name}
            onDelete={() => deleteProduct(item.name)}
          />
        ))}
      </ShoppingList>
      <ShoppingAddProduct />
    </main>
  );
}

export default App;
