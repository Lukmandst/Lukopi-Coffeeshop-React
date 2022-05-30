import React, { Component } from "react";
import "./product-details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container details-container">
          <div className="row p-details-row">
            <header>
              <span>Favorite & Promo</span>
              <span> Cold Brew</span>
            </header>
            <div className="col left-col-details d-flex">
              <div className="details-product-image"></div>
              <div className="delivery-time-section d-flex">
                <header>Delivery and Time</header>
                <div className="delivery-category d-flex">
                  <button className="dine-in-btn">Dine in</button>
                  <button className="door-deliv-btn">Door Delivery</button>
                  <button className="pick-up-btn">Pick Up</button>
                </div>
                <div className="now-wrapper d-flex">
                  Now
                  <button className="yes-btn">Yes</button>
                  <button className="no-btn">No</button>
                </div>
                <div className="set-time-wrapper">
                  Set time
                  <input
                    name="time"
                    placeholder="Enter time for reservation"
                    type="text"
                  ></input>
                </div>
              </div>
            </div>
            <div className="col right-col-details d-flex">
              <header className="product-title">cold brew</header>
              <p className="product-details">
                Cold brewing is a method of brewing that combines ground coffee
                and cool water and uses time instead of heat to extract the
                flavor. It is brewed in small batches and steeped for as long as
                48 hours.
              </p>
              <div className="delivery-time-product">Delivery only on</div>
              <div className="amount-price-wrapper">
                <div class="def-number-input number-input safari_only">
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    class="minus"
                  ></button>
                  <input class="quantity"
                    min="0"
                    name="quantity"
                    value="1"
                    type="number"></input>
                  <button
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    class="plus"
                  ></button>
                </div>
                <div className="product-price">IDR</div>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="ask-a-staff-btn">Ask a Staff</button>
            </div>
          </div>
          <div className="row checkout-row d-flex">
            <div className="col col-size d-flex">
              <header>Choose a size</header>
              <div className="size-btn d-flex">
                <button className="r-btn">R</button>
                <button className="l-btn">L</button>
                <button className="xl-btn">XL</button>
              </div>
            </div>
            <div className="col col-checkout d-flex">
              <div className="product-img-checkout"></div>
              <div className="product-details-checkout">
                <header>cold brew</header>
                <p className="size-item-details">
                  <span className="amount-item-details">x1</span>
                  (large)
                </p>
              </div>
              <div className="checkout-section d-flex">
                <p>checkout</p>
                <button className="checkout-btn"></button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
