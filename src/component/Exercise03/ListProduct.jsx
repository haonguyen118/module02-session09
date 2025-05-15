import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListProduct() {
  const products = [
    {
      image:
        "https://www.bing.com/th?id=OPAC.ATVr9b%2bUIt999A474C474&o=5&pid=21.1&w=148&h=193&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      id: 1,
      productName: `Dien thoai iphone 15 Pro`,
      price: `30.000.000VND`,
    },
    {
      image:
        "https://www.bing.com/th?id=OPAC.OWY9BDIP3mIpDA474C474&o=5&pid=21.1&w=148&h=156&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      id: 2,
      productName: "Dien thoai OPPOReno11",
      price: "10.600.000VND",
    },
    {
      image:
        "https://www.bing.com/th?id=OPAC.3yulklg304N86w474C474&o=5&pid=21.1&w=148&h=216&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      id: 3,
      productName: "Dien thoai Vivo Y17s",
      price: "3.300.000VND",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.jRn00idZbiF8PH-PWawiggHaHa?w=182&h=182&c=7&r=0&o=5&cb=iwc2&pid=1.7",
      id: 4,
      productName: "Nokia 8210 4G",
      price: "3.300.000VND",
    },
  ];

  const navigate = useNavigate();
  const handleShowProduct = (product) => {
    localStorage.setItem("product", JSON.stringify(product));
    navigate("/productDetail");
  };
  const [filterProductBySearch, setFilterProductBySearch] = useState([]);
  const [ListProductSearch, setListProductSearch] = useState(products);
  const handleSearch = () => {
    const newList = [...products];

    if (filterProductBySearch == "") {
      setListProductSearch(newList);
    } else {
      const listFilter = newList.filter(
        (el) =>
          el.price.includes(filterProductBySearch) ||
          el.productName.includes(filterProductBySearch)
      );
      setListProductSearch(listFilter);
    }
    //   setListProductSearch(null);
    // } else {
    //   const newList = [...products];

    //   setListProductSearch(listFilter);
    //   console.log(listFilter);
    // }
  };
  const handleInputChange = (value) => {
    setFilterProductBySearch(value);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List product</h2>
      <div
        style={{
          display: "flex",
          position: "relative",
          marginLeft: 100,
          gap: 5,
        }}
      >
        <input
          type="search"
          placeholder="search..."
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button
          style={{ backgroundColor: "green", width: 80, height: 25 }}
          onClick={handleSearch}
        >
          Tim kiem
        </button>
      </div>
      {ListProductSearch.length === 0
        ? "Khong tim thay danh sach san pham ban can tim"
        : ""}

      {ListProductSearch.map((product) => {
        return (
          <div key={product.id}>
            <img width={200} height={200} src={product.image} alt="" />
            <p style={{ textAlign: "center" }}>{product.productName}</p>
            <p style={{ textAlign: "center" }}>{product.price}</p>
            <button
              style={{ width: 100, backgroundColor: "green" }}
              onClick={() => handleShowProduct(product)}
            >
              Xem chi tiết
            </button>
          </div>
        );
      })}
    </div>
  );
}
