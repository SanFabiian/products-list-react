import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import { ContextListProducts } from "./context/ContextListProducts";

import { ShoppingCount } from "./components/ShoppingCount";
import { ShoppingSearch } from "./components/ShoppingSearch";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingAddProduct } from "./components/ShoppingAddProduct";
import { ShoppingItem } from "./components/ShoppingItem";
import { FormAddProduct } from "./components/FormAddProduct";

function App() {
  const { searcherProduct, deleteProduct } = useContext(ContextListProducts);

  return (
    <main className="container">
      <ShoppingCount />
      <ShoppingSearch />
      <ShoppingList>
        {searcherProduct.map((item) => (
          <ShoppingItem
            key={item.id}
            product={item.name}
            onDelete={() => deleteProduct(item.name)}
          />
        ))}
      </ShoppingList>
      <ShoppingAddProduct>
        <FormAddProduct />
      </ShoppingAddProduct>
    </main>
  );
}

export default App;
