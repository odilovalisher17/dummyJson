import React, { useState, useEffect } from "react";
import axios from "axios";

const AddModal = ({ products, setProducts, setAction, setActiveProduct }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const getCateg = async () => {
      const data = await axios.get("https://dummyjson.com/products/categories");

      setCategories(data.data);
      setSelectedCategory(data.data[0]);
    };
    getCateg();
  }, []);

  const handleSubmit = async () => {
    try {
      const newProduct = {
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

      await axios.post(`https://dummyjson.com/products/add`, newProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newProducts = [...products];
      newProducts.push(newProduct);
      setProducts(newProducts);

      setActiveProduct(newProducts.length - 1);
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
            Title : <input type="text" className="edit-new-title" autoFocus />
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
            <input type="text" className="edit-new-brand" />
          </div>

          <div className="edit-modal-price">
            <div>Price : </div>
            $
            <input type="number" className="edit-new-price" />
          </div>

          <div className="edit-modal-discount">
            <div>Discount :</div>
            <input type="number" className="edit-new-discount" />%
          </div>

          <div className="edit-modal-rating">
            <div> Rating :</div>
            <input type="number" className="edit-new-rating" />
          </div>

          <div className="edit-modal-stock">
            <div> Stock :</div>
            <input type="number" className="edit-new-stock" />
          </div>

          <div className="edit-modal-description">
            <div>Description :</div>
            <textarea
              name=""
              id=""
              cols="30"
              rows=""
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

export default AddModal;
