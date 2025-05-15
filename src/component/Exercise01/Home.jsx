import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to={"/Ex01"} style={{ textDecoration: "none" }}>
          Exercise01
        </Link>
        <Link to={"/admin"} style={{ textDecoration: "none" }}>
          Exercise02
        </Link>
        <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
          Exercise03
        </Link>
        <Link to={"/Ex04"} style={{ textDecoration: "none" }}>
          Exercise04
        </Link>
      </div>
      <h2>Day la trang chu</h2>
    </>
  );
}
