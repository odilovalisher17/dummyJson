import React from "react";

const SideBar = ({ products, activeProduct, setActiveProduct, setAction }) => {
  return (
    <div className="sidebar">
      {products.map((el, ind) => (
        <div
          key={ind}
          className={
            activeProduct === ind
              ? "sidebar-product active-product"
              : "sidebar-product"
          }
          onClick={(e) => {
            setActiveProduct(ind);

            if (!e.target.closest(".side-bar-action-btn")) {
              setAction("view");
            }
          }}>
          <div className="sidebar-product-title">{el.title}</div>

          <div
            className={
              activeProduct === ind
                ? "sidebar-action-btns active-product-btns"
                : "sidebar-action-btns"
            }>
            <button
              className="side-bar-action-btn"
              feature="button"
              onClick={(e) => {
                e.preventDefault();
                setAction("edit");
              }}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>

            <button
              className="side-bar-action-btn"
              feature="button"
              onClick={(e) => {
                e.preventDefault();
                setAction("delete");
              }}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
