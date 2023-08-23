import React, { useState, useEffect } from "react";
import "./ProductList.css";
import axios from "axios";
import ProductHeader from "./elements/ProductHeader";
import SideBar from "./elements/SideBar";
import ActionsPlayground from "./elements/ActionsPlayground";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(undefined);
  const [action, setAction] = useState(undefined);

  useEffect(() => {
    const getAllProd = async () => {
      const data = await axios.get("https://dummyjson.com/products");

      setProducts(data.data.products);
    };

    getAllProd();
  }, []);

  return (
    <div className="product-list">
      <ProductHeader />

      <div className="product-list-desktop">
        <div>
          <button
            className="sidebar-add-btn"
            onClick={(e) => {
              e.preventDefault();
              setAction("add");
              setActiveProduct(undefined);
            }}>
            Add Product
          </button>
          <SideBar
            products={products}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
            setAction={setAction}
          />
        </div>
        <ActionsPlayground
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
          action={action}
          setAction={setAction}
          product={products[activeProduct]}
          products={products}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
};

export default ProductList;
