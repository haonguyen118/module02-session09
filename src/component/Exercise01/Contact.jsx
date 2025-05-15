import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to={"/about"} style={{ textDecoration: "none" }}>
          About
        </Link>
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </div>
      <p>Day la trang lien he</p>
    </>
  );
}
