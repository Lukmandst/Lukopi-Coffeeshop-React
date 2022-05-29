import React, { Component } from "react";
import "./historyicon.css"
import "bootstrap/dist/css/bootstrap.min.css";


class HistoryIcon extends Component {
  render() {
    return (
      <button className="history-icon d-flex">
        <div className="product-icon"></div>
        <div className="product-details">
          <p className="product-name">Veggie tomato mix</p>
          <p className="product-price">IDR 34000</p>
          <p className="product-status">Delivered</p>
        </div>
      </button>
    );
  }
}

export default HistoryIcon;
