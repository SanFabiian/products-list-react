import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

const ShoppingAddProduct = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="ShoppingAddProduct">
        <FaPlusCircle className="text-light" />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agrega un producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export { ShoppingAddProduct };
