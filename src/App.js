import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
};

export default App;