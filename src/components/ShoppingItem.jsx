import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
const ShoppingItem = (props) => {
  const btnEdit = () => {
    console.log("edit");
  };
  return (
    <li className="card mt-2 py-2 px-4 d-flex align-items-center justify-content-between flex-row">
      {props.product}
      <div className="Card-buttons">
        <button
          className="btn d-inline-flex align-items-center"
          onClick={btnEdit}
        >
          <FaEdit className="btn-edit" />
        </button>
        <button
          className="btn d-inline-flex align-items-center"
          onClick={props.onDelete}
        >
          <FaTrashAlt className="btn-delete" />
        </button>
      </div>
    </li>
  );
};

export { ShoppingItem };
