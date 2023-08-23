import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ViewModal = ({ product }) => {
  return (
    <div className="view-modal">
      <div className="view-modal-title">
        <h1>{product.title}</h1>
      </div>

      <div className="view-modal-context">
        <div className="view-modal-context-text">
          <div className="view-modal-category">
            Category : {product.category}
          </div>

          <div className="view-modal-brand">Brand : {product.brand}</div>

          <div className="view-modal-price">Price : ${product.price}</div>

          <div className="view-modal-discount">
            Discount : {product.discountPercentage}%
          </div>

          <div className="view-modal-rating">Rating : {product.rating}</div>

          <div className="view-modal-stock">Stock : {product.stock}</div>

          <div className="view-modal-description">
            Description : {product.description}
          </div>
        </div>

        <div className="view-modal-carousel">
          <Carousel>
            {product.images
              ? product.images.map((el, ind) => (
                  <Carousel.Item interval={1000} key={ind}>
                    <img src={el} alt="" />
                  </Carousel.Item>
                ))
              : ""}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
