import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import withParams from "../../../helper/WithParams";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./product-details.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: 1,
      size: "Regular",
    };
  }
  handlePlus = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  handleMinus = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  async componentDidMount() {
    document.title = "Lukopi - History Details";
    const { params } = this.props;
    const url = `${process.env.REACT_APP_HOST_API}/product?id=${params.id}`;
    try {
      const result = await axios.get(url);
      const productsArray = result.data.data;
      console.log(productsArray[0]);
      this.setState({
        products: productsArray[0],
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { products } = this.state;
    const { params } = this.props;
    return (
      <div>
        <Navbar page="history" />
        <div className="container details-container">
          <div className="row p-details-row">
            <header>
              <Link to="/products">Product</Link>
              <Link to={`/products/${params.id}`}> / {products.name}</Link>
            </header>
            <section className="left-col-details">
              <div className="details-product-image">
                <img
                  src={`${process.env.REACT_APP_HOST_API}${products.image}`}
                  alt="product-img"
                />
              </div>
              <div className="product-desc">
                <header className="product-title">{products.name}</header>
                <p className="product-details">{products.details}</p>
                <div className="delivery-time-product">Delivery only on</div>
                <div className="amount-price-wrapper d-flex"></div>
              </div>
            </section>

            <section className="right-col-details ">
              <div className="delivery-time-section">
                <div className="delivery-wrapper">
                  <header>Delivery and Time</header>
                  <div className="delivery-category d-flex">
                    <input
                      className="radio_input d-none"
                      type="radio"
                      name="delivery"
                      id="Dine-In"
                      value="Dine In"
                      onClick={(e) => {
                        this.setState({
                          delivery: e.target.value,
                        });
                      }}
                    />
                    <label
                      htmlFor="Dine-In"
                      className="radio_label dine-in-btn"
                    >
                      Dine In
                    </label>
                    <input
                      className="radio_input d-none"
                      type="radio"
                      name="delivery"
                      id="Door-Delivery"
                      value="Door Delivery"
                      onClick={(e) => {
                        this.setState({
                          delivery: e.target.value,
                        });
                      }}
                    />
                    <label
                      htmlFor="Door-Delivery"
                      className="radio_label dine-in-btn"
                    >
                      Door Delivery
                    </label>
                    <input
                      className="radio_input d-none"
                      type="radio"
                      name="delivery"
                      id="Pick-Up"
                      value="Pick Up"
                      onClick={(e) => {
                        this.setState({
                          delivery: e.target.value,
                        });
                      }}
                    />
                    <label
                      htmlFor="Pick-Up"
                      className="radio_label dine-in-btn"
                    >
                      Pick Up
                    </label>
                  </div>
                  <div className="now-wrapper d-flex">
                    Now
                    <input
                      className="radio_input d-none"
                      type="radio"
                      name="now"
                      id="yes"
                      value="Yes"
                    />
                    <label htmlFor="yes" className="radio_label yes-btn">
                      Yes
                    </label>
                    <input
                      className="radio_input d-none"
                      type="radio"
                      name="now"
                      id="no"
                      value="No"
                    />
                    <label htmlFor="no" className="radio_label no-btn">
                      No
                    </label>
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
              <div className="input-menu">
                <div className="counter-and-price d-flex">
                  <div className="counter">
                    <button className="minus-btn" onClick={this.handleMinus}>
                      -
                    </button>
                    <input
                      type="text"
                      value={this.state.quantity}
                      onChange={() => {}}
                    />
                    <button className="plus-btn" onClick={this.handlePlus}>
                      +
                    </button>
                  </div>
                  <div className="product-price">IDR {products.price}</div>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={this.handleAddtoCart}
                >
                  Add to Cart
                </button>
                <button className="ask-a-staff-btn">Ask a Staff</button>
              </div>
            </section>
          </div>
          <div className="row checkout-row ">
            <div className="col col-size d-flex">
              <header>Choose a size</header>
              <div className="size-btn d-flex">
                <input
                  className="radio_input d-none"
                  type="radio"
                  name="size"
                  id="regular"
                  value="Regular"
                  onClick={(e) => {
                    this.setState({
                      size: e.target.value,
                    });
                  }}
                />
                <label htmlFor="regular" className="radio_label r-btn">
                  R
                </label>
                <input
                  className="radio_input d-none"
                  type="radio"
                  name="size"
                  id="large"
                  value="Large"
                  onClick={(e) => {
                    this.setState({
                      size: e.target.value,
                    });
                  }}
                />
                <label htmlFor="large" className="radio_label r-btn">
                  L
                </label>
                <input
                  className="radio_input d-none"
                  type="radio"
                  name="size"
                  id="extra-large"
                  value="Extra Large"
                  onClick={(e) => {
                    this.setState({
                      size: e.target.value,
                    });
                  }}
                />
                <label htmlFor="extra-large" className="radio_label r-btn">
                  XL
                </label>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withParams(ProductDetails);
