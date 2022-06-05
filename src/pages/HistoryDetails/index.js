import React, { Component } from "react";
// import "./product-details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import withParams from "../../helper/WithParams";
import { Link } from "react-router-dom";

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
    const { products } = this.state;
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
            <div className="col left-col-details d-flex">
              <div className="details-product-image">
                <img
                  src={`http://localhost:8080${products.image}`}
                  alt="product-img"
                />
              </div>
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
              <header className="product-title">{products.name}</header>
              <p className="product-details">{products.details}</p>
              <div className="delivery-time-product">Delivery only on</div>
              <div className="amount-price-wrapper d-flex">
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

export default withParams(ProductDetails);
