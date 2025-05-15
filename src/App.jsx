import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Exercise01/Home";
import About from "./component/Exercise01/About";
import Contact from "./component/Exercise01/Contact";
import Ex01 from "./component/Exercise01/Ex01";
import Ex02 from "./component/Exercise01/Ex02";
import Ex03 from "./component/Exercise01/Ex03";
import PrivateRoute from "./component/Exercise02/PrivateRoute";
import AdminIndex from "./component/Exercise02/AdminIndex";
import Account from "./component/Exercise02/Account";
import Product from "./component/Exercise02/Product";
import Order from "./component/Exercise02/Order";
import ListProduct from "./component/Exercise03/ListProduct";
import ProductDetail from "./component/Exercise03/ProductDetail";
import Login from "./component/Exercise04/Login";

import Ex04 from "./component/Exercise04/Ex04";
import PrivateRouteNew from "./component/Exercise04/PrivateRouteNew";
import AccountNew from "./component/Exercise04/Accountnew";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Ex01" element={<Ex01 />} />
        <Route path="/Ex02" element={<Ex02 />} />
        <Route path="/Ex03" element={<Ex03 />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route index element={<AdminIndex />} />
          <Route path="account" element={<Account />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Ex04" element={<Ex04 />} />
        <Route path="/privateRoute" element={<PrivateRouteNew />} />
        <Route
          path="/AccountNew"
          element={
            <PrivateRouteNew>
              <AccountNew />
            </PrivateRouteNew>
          }
        />
      </Routes>
    </>
  );
}

export default App;
