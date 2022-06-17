import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux/es/exports";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

import withParams from "../../../helper/WithParams";

import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";

import "./product-details.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      size: "Regular",
      productid: this.props.params.id,
    };
  }

  async componentDidMount() {
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
    const { products, productid, size } = this.state;
    const { params } = this.props;
    return (
      <div>
        <Navbar page="product" />
        <div className="container details-container">
          <div className="row p-details-row">
            <header className="p-details-header">
              <Link to="/products">Product</Link>
              <Link to={`/products/${params.id}`}> / {products.name}</Link>
            </header>
            <LeftDetails products={products} />
            <RightDetails
              products={products}
              productid={productid}
              size={size}
            />
            <section className="checkout-details ">
              <div className="size-wrapper">
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

              {this.props.showMiniCart ? (
                <div className="col-checkout d-flex">
                  <div className="product-img-checkout">
                    <img
                      src={`${process.env.REACT_APP_HOST_API}/${products.image}`}
                      alt="product-icon"
                    />
                  </div>
                  <div className="product-details-checkout">
                    <header>{products.name}</header>
                    <p className="size-item-details">
                      <span className="amount-item-details">
                        x{this.props.quantity}
                      </span>
                      ({this.props.size})
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
            </section>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemData: state.TransactionsReducer,
    showMiniCart: state.TransactionsReducer.showMiniCart,
    quantity: state.TransactionsReducer.quantity,
    size: state.TransactionsReducer.size,
  };
};

export default connect(mapStateToProps)(withParams(ProductDetails));
