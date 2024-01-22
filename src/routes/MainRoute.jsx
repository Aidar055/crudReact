import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import TodoDetail from "../components/TodoDetail";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Create" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<TodoDetail />} />
    </Routes>
  );
};

export default MainRoute;
