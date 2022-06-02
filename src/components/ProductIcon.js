import React, { Component } from "react";
import "./CSS/productIcon.css"

class ProductIcon extends Component {
  render() {
    return (
      <button className="product-icon">
        <div className="disc">10%</div>
        <div className="product-image"></div>
        <p className="product-name">Veggie tomato mix</p>
        <p className="-product-price">IDR 34.000</p>
      </button>
    );
  }
}

export default ProductIcon;
