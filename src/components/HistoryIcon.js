import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./CSS/historyicon.css";

function HistoryFunc({ data, date }) {
  const [products, setProducts] = useState([]);
  const url = `${process.env.REACT_APP_HOST_API}/product?id=${data.products_id}`;
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
        <div className="product-icon">
          <img
            src={`http://localhost:8080${products.image}`}
            alt="product-img"
          />
        </div>
        <div className="history-product-details">
          <p className="history-product-name">{products.name}</p>
          <p className="history-product-price">{products.price}</p>
          <p className="history-product-status">{date}</p>
        </div>
        <input type="checkbox" value={data.products_id} />
      </button>
    </>
  );
}

export default HistoryFunc;
