import React from "react";
import { Link } from "react-router-dom";

export default function Ex01() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link to={"/contact"} style={{ textDecoration: "none" }}>
        Contact
      </Link>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        About
      </Link>
    </div>
  );
}
