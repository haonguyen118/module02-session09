import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/admin"}>PrivateRoute</Link>
        <Link to={"/admin/account"}>Account</Link>
        <Link to={"/admin/product"}>Product</Link>
        <Link to={"/admin/order"}>Order</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
