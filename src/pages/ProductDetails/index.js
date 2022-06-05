import React, { Component } from "react";
import "./product-details.css";
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
      cart: [],
      size: "Regular",
      productid: this.props.params.id,
      showMiniCart: false,
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

  handleAddtoCart = (e) => {
    const { size, quantity, productid } = this.state;
    e.preventDefault();
    localStorage.setItem(
      "usercart",
      JSON.stringify({ id: productid, quantity: quantity, size: size })
    );
    this.setState({
      showMiniCart: true,
    });
    const carti = JSON.parse(localStorage.getItem("usercart"));
    console.log(carti);
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
            <section className="left-col-details">
              <div className="details-product-image">
                <img
                  src={`http://localhost:8080${products.image}`}
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
                <button className="r-btn">R</button>
                <button className="l-btn">L</button>
                <button className="xl-btn">XL</button>
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
