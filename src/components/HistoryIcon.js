import axios from "axios";
import "./CSS/historyicon.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HistoryFunc({ data }) {
  const [products, setProducts] = useState([]);
  const url = `http://localhost:8080/product?id=${data.products_id}`;
  const navigate = useNavigate();

  const handleGoToDetail = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        const productArray = result.data.data;
        // console.log(productArray[0]);
        setProducts(productArray[0]);
      })
      .catch((error) => console.error(error));
  }, [url]);
  return (
    <>
      <button
        className="history-icon d-flex"
        onClick={() => handleGoToDetail(data.products_id)}
      >
        <div className="product-icon"></div>
        <div className="product-details">
          <p className="product-name">{products.name}</p>
          <p className="product-price">{products.price}</p>
          <p className="product-status">{data.products_id}</p>
        </div>
      </button>
    </>
  );
}

export default HistoryFunc;
