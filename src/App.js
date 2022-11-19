import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar2";
import Footer from "./components/Footer/Footer";
// import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import axios from "axios";
import Cart from "./pages/cart/Cart";
import React, { Suspense } from "react";
const ProductsLazy = React.lazy(() => import("./pages/products/Products"));
axios.defaults.baseURL = "https://shopnkp1.herokuapp.com/api";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/products" element={<ProductsLazy />}></Route>
          <Route path="/products/:productid" element={<Product />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
