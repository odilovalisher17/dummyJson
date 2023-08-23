import React from "react";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";

const ActionsPlayground = ({
  action,
  setAction,
  product,
  products,
  setProducts,
  setActiveProduct,
  activeProduct,
}) => {
  if (action === "view") {
    return <ViewModal product={product} />;
  } else if (action === "edit") {
    return (
      <EditModal
        product={product}
        products={products}
        setProducts={setProducts}
        setAction={setAction}
      />
    );
  } else if (action === "add") {
    return (
      <AddModal
        setActiveProduct={setActiveProduct}
        product={product}
        products={products}
        setProducts={setProducts}
        setAction={setAction}
      />
    );
  } else if (action === "delete") {
    return (
      <DeleteModal
        products={products}
        setProducts={setProducts}
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
        setAction={setAction}
      />
    );
  } else {
    return (
      <div className="action-playground">No product has not selected yet.</div>
    );
  }
};

export default ActionsPlayground;
