import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Shopping } from "../Pages/Shopping/Shopping";

import CreateSupplier from "../Components/CreateSupplier/CreateSupplier";
import Paypal from "../Components/Paypal/Paypal";

import CreateProduct from "../Pages/CreateProduct/CreateProduct";

//components
import Home from "../Pages/Home/Home";

import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/buy" element={<Shopping />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/paypal" element={<Paypal />} />
        <Route path="/create/supplier" element={<CreateSupplier />} />
        <Route path="/shop" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
