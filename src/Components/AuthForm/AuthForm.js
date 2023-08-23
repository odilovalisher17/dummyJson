import React, { useState, useEffect } from "react";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Helpers/AuthContext";

const AuthForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { login, logout } = useAuth();

  /* eslint-disable */
  useEffect(() => {
    const authTokenCookie = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("authToken="));

    // If the authToken cookie exists, the user is logged in
    const isLoggedInVal = !!authTokenCookie;
    if (isLoggedInVal) {
      login();
      navigate("/");
    }
  }, []);
  /* eslint-disable */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogIn();
    } else {
      // Perform registration logic here
    }
  };

  const handleLogIn = async () => {
    const token = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (token.data.token) {
      // Simulate a successful login, get the authToken from the server
      const authToken = `${token.data.token}`;

      // Set cookie with an expiration date (e.g., 30 days from now)
      const expiryDate = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toUTCString();
      document.cookie = `authToken=${authToken}; expires=${expiryDate}; path=/`;
      document.cookie = `username=${token.data.firstName}; expires=${expiryDate}; path=/`;
      login();
      navigate("/");
    } else {
      logout();
    }
  };

  return (
    <div className="auth-form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register here."
            : "Already have an account? Login here."}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
