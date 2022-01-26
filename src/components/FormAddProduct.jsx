import React, { useContext, useState } from "react";
import { ContextListProducts } from "../context/ContextListProducts";

const FormAddProduct = () => {
  const { addProduct } = useContext(ContextListProducts);
  const [newProduct, setNewProduct] = useState("");

  const onChange = (e) => {
    setNewProduct(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="d-flex gap-2 justify-content-center my-2"
    >
      <input
        type="text"
        placeholder="Nuevo producto"
        value={newProduct}
        onChange={onChange}
        className="w-100 px-3"
        required
      />
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export { FormAddProduct };
