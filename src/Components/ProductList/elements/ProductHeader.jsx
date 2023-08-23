import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductHeader = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");

  /* eslint-disable */
  useEffect(() => {
    const userN = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("username="))
      .substring(9);

    // If the authToken cookie exists, the user is logged in
    if (userN) {
      setUserName(userN);
    }
  }, []);
  /* eslint-disable */

  const handleLogOut = (e) => {
    e.preventDefault();

    clearCookie("username");
    clearCookie("authToken");
    navigate("/login");
  };

  function clearCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  return (
    <div className="product-header">
      <div className="product-header-username">{userName}</div>

      <div className="product-header-logout">
        <button onClick={(e) => handleLogOut(e)}>Log out</button>
      </div>
    </div>
  );
};

export default ProductHeader;
