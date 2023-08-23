import React, { useState, useEffect } from "react";
import axios from "axios";

const EditModal = ({ product, products, setProducts, setAction }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(product.category);

  useEffect(() => {
    const getCateg = async () => {
      const data = await axios.get("https://dummyjson.com/products/categories");

      setCategories(data.data);
    };
    getCateg();
  }, []);

  const handleSubmit = async () => {
    try {
      const newProduct = {
        ...product,
        title: document.querySelector(".edit-new-title").value,
        category: selectedCategory,
        brand: document.querySelector(".edit-new-brand").value,
        price: document.querySelector(".edit-new-price").value * 1,
        discountPercentage:
          document.querySelector(".edit-new-discount").value * 1,
        rating: document.querySelector(".edit-new-rating").value * 1,
        stock: document.querySelector(".edit-new-stock").value * 1,
        description: document.querySelector(".edit-new-description").value,
      };

      delete newProduct.id;

      await axios.put(
        `https://dummyjson.com/products/${product.id}`,
        newProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const newProducts = [...products];
      newProducts[product.id - 1] = newProduct;
      setProducts(newProducts);

      setAction("view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-modal">
      <div>
        <div className="edit-modal-title">
          <h1>
            Title :{" "}
            <input
              type="text"
              className="edit-new-title"
              defaultValue={product.title}
              autoFocus
            />
          </h1>
        </div>

        <div className="edit-modal-context">
          <div className="edit-modal-category">
            <div>Category :</div>
            <select
              name=""
              id=""
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((el, ind) => (
                <option value={el} key={ind}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div className="edit-modal-brand">
            <div>Brand :</div>
            <input
              type="text"
              defaultValue={product.brand}
              className="edit-new-brand"
            />
          </div>

          <div className="edit-modal-price">
            <div>Price : </div>
            $
            <input
              type="number"
              defaultValue={product.price}
              className="edit-new-price"
            />
          </div>

          <div className="edit-modal-discount">
            <div>Discount :</div>
            <input
              type="number"
              defaultValue={product.discountPercentage}
              className="edit-new-discount"
            />
            %
          </div>

          <div className="edit-modal-rating">
            <div> Rating :</div>
            <input
              type="number"
              defaultValue={product.rating}
              className="edit-new-rating"
            />
          </div>

          <div className="edit-modal-stock">
            <div> Stock :</div>
            <input
              type="number"
              defaultValue={product.stock}
              className="edit-new-stock"
            />
          </div>

          <div className="edit-modal-description">
            <div>Description :</div>
            <textarea
              name=""
              id=""
              cols="30"
              rows=""
              defaultValue={product.description}
              className="edit-new-description"></textarea>
          </div>
        </div>

        <button
          className="edit-modal-submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default EditModal;
