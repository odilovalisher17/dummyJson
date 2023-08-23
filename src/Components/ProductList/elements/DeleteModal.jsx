import React from "react";
import axios from "axios";

const DeleteModal = ({
  products,
  setProducts,
  activeProduct,
  setActiveProduct,
  setAction,
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://dummyjson.com/products/${products[activeProduct].id}`
      );

      const newProducts = [...products].filter(
        (p, ind) => ind !== activeProduct
      );
      setProducts(newProducts);
      setActiveProduct(undefined);
      setAction(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setAction("view");
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal-text">
        Are you sure you want to delete the product?
      </div>

      <div className="delete-modal-btns">
        <button
          className="delete-modal-delete"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}>
          Delete
        </button>
        <button
          className="delete-modal-cancel"
          onClick={(e) => {
            e.preventDefault();
            handleCancel();
          }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
