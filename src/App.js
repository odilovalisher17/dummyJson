import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Helpers/AuthContext";
import PrivateRoute from "./Helpers/PrivateRoute";
import AuthForm from "./Components/AuthForm/AuthForm";
import ProductList from "./Components/ProductList/ProductList";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
