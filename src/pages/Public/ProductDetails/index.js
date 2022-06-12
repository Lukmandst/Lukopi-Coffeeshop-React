import React, { Component } from "react";
import "./product-details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";
import withParams from "../../../helper/WithParams";
import { Link } from "react-router-dom";
import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: 1,
      cart: [],
      delivery: "Dine In",
      size: "Regular",
      productid: this.props.params.id,
      showMiniCart: false,
    };
  }
  

  

  async componentDidMount() {
    const { params } = this.props;

    const url = `http://localhost:8080/product?id=${params.id}`;
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
    const { products, showMiniCart } = this.state;
    const { params } = this.props;
    return (
      <div>
        <Navbar />
        <div className="container details-container">
          <div className="row p-details-row">
            <header>
              <Link to="/products">Product</Link>
              <Link to={`/products/${params.id}`}> / {products.name}</Link>
            </header>
            <LeftDetails products={products}/>

            <RightDetails products={products}/>
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
            {showMiniCart ? (
              <div className="col col-checkout d-flex">
                <div className="product-img-checkout">
                  <img
                    src={`http://localhost:8080${products.image}`}
                    alt="product-icon"
                  />
                </div>
                <div className="product-details-checkout">
                  <header>{products.name}</header>
                  <p className="size-item-details">
                    <span className="amount-item-details">
                      x{this.state.quantity}
                    </span>
                    ({this.state.size})
                  </p>
                </div>
                <div className="checkout-section d-flex">
                  <p>checkout</p>
                  <Link to="/yourcart">
                    <button className="checkout-btn"></button>
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withParams(ProductDetails);
