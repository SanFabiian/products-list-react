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
        <button className="btn d-inline-flex align-items-center">
          <FaEdit className="btn-edit" onClick={btnEdit} />
        </button>
        <button className="btn d-inline-flex align-items-center">
          <FaTrashAlt className="btn-delete" onClick={props.onDelete} />
        </button>
      </div>
    </li>
  );
};

export { ShoppingItem };
