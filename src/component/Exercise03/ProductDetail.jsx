import js from "@eslint/js";
import React from "react";
import Product from "../Exercise02/Product";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const productDetail = JSON.parse(localStorage.getItem("product"));

  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img width={400} height={400} src={productDetail.image} alt="" />
      <div>
        <p>Id:{productDetail.id}</p>
        <p>Productname:{productDetail.Product}</p>
        <p>Price:{productDetail.price}</p>
        <button
          style={{
            width: 50,
            backgroundColor: "green",
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/listproduct"}>
            Back
          </Link>
        </button>
      </div>
    </div>
  );
}
