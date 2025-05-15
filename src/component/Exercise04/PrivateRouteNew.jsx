import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRouteNew({ children }) {
  const isLoggedIn = localStorage.getItem("isLogin");

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
export default PrivateRouteNew;
