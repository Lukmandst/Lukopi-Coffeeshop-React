import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/productIcon.css";

function ProductIcon({ data}) {
  const navigate = useNavigate();

  const handleGoToDetail = (id) => {
    navigate(`${id}`);
  };

  return (
    <button
      key={data.id}
      className="product-icon"
      onClick={() => {
        handleGoToDetail(data.id);
      }}
    >
      <div className="disc">10%</div>
      <div className="product-image">
        <img src={`http://localhost:8080${data.image}`} alt='product-img' />
      </div>
      <p className="product-name">{data.name}</p>
      <p className="-product-price">IDR {data.price}</p>
    </button>
  );
}

export default ProductIcon;
