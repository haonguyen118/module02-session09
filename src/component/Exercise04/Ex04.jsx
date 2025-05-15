import React from "react";
import { Link } from "react-router-dom";

export default function Ex04() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link to={"/privateRoute"}>PrivateRouteNew</Link>
      <Link to={"/AccountNew"}>AccountNew</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}
