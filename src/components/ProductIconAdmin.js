import React from "react";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../helper/CurrencyFormatter";
import "./CSS/productIcon.css";

function ProductIconAdmin({ data }) {
  return (
    <div key={data.id} className="product-icon-admin">
      <div className="disc">10%</div>
      <div className="product-image">
        <img
          src={`${process.env.REACT_APP_HOST_API}${data.image}`}
          alt="product-img"
        />
      </div>
      <p className="product-name">{data.name}</p>
      <p className="-product-price">{CurrencyFormatter.format(
        data.price)}</p>
      <Link to={`${data.id}`}>
        <div className="edit-icon-btn"> </div>
      </Link>
    </div>
  );
}

export default ProductIconAdmin;
