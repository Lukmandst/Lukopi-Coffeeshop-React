import React, { Component } from "react";
import "./CSS/productIcon.css";

class ProductIcon extends Component {
  render() {
    const { keyId, imgsource, altimg, name, price } = this.props;
    return (
      <button key={keyId} className="product-icon">
        <div className="disc">10%</div>
        <div className="product-image">
          <img src={imgsource} alt={`${altimg}-img`}/>
        </div>
        <p className="product-name">{name}</p>
        <p className="-product-price">IDR {price}</p>
      </button>
    );
  }
}

export default ProductIcon;
