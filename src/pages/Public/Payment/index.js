import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import axios from "axios";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
import {
  createNewTransaction,
  resetTransactionState,
} from "../../../Redux/actions/transactionActions";
import { CurrencyFormatter } from "../../../helper/CurrencyFormatter";

class Payment extends Component {
  state = {
    isSuccess: false,
    products: [],
    subtotal: 0,
    tax: 0,
    ship: 0,
    bill: 0,
  };

  handlerCreateTransaction = (e) => {
    e.preventDefault();
    this.props.createOrder({
      product_id: this.props.itemData.product_id,
      product_size: this.props.itemData.size,
      quantity: this.props.itemData.quantity,
      delivery: this.props.itemData.delivery,
      token: this.props.token,
      total_price: this.state.bill,
    });
    this.setState({
      isSuccess: true,
    });
  };

  async componentDidMount() {
    document.title = "Lukopi - Your Cart";
    try {
      const url = `${process.env.REACT_APP_HOST_API}/product?id=${this.props.itemData.product_id}`;
      const result = await axios.get(url);
      const productsArray = result.data.data;
      this.setState({
        products: productsArray[0],
      });
    } catch (error) {
      console.error(error);
    }
    const { products } = this.state;
    const { itemData } = this.props;
    let subtotal = products.price * itemData.quantity;
    let tax = subtotal * 0.1;
    let ship = itemData.delivery !== "Dine In" ? 10000 : 0;
    let bill = subtotal + tax + ship;
    this.setState({
      bill: bill,
      subtotal: subtotal,
      tax: tax,
      ship: ship,
    });
  }

  render() {
    const { products, tax, ship, bill, subtotal } = this.state;
    const { UserData, itemData, emptyCart } = this.props;
    console.log(itemData);
    if (this.state.isSuccess) {
      return <Navigate to="/products" />;
    }
    // console.log(subtotal, tax, bill);

    return (
      <>
        <Navbar page="yourcart" />
        <main className="container-fluid payment-container">
          {itemData.product_id ? (
            <div className="payment-main-section container d-flex">
              <div className="payment-left">
                <header>
                  <h1>Checkout your item now!</h1>
                </header>
                <div className="order-wrapper">
                  <h3>Order Summary</h3>
                  <br />
                  {itemData.product_id && (
                    <div className="product-wrapper d-flex">
                      <div className="img-prdct">
                        <img
                          src={`${process.env.REACT_APP_HOST_API}${products.image}`}
                          alt="product-icon"
                        />
                      </div>
                      <div className="product-details-payment">
                        <header>{products.name}</header>
                        <p className="size-item-payment">
                          <span className="amount-item-payment">
                            x
                            {this.props.itemData.quantity
                              ? this.props.itemData.quantity
                              : 0}
                            <br />
                          </span>
                          ({this.props.itemData.size})
                        </p>
                      </div>
                      <div className="payment-prdct-price">
                        {CurrencyFormatter.format(products.price)}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <div
                          className="product-delete-btn"
                          onClick={() => {
                            emptyCart();
                          }}
                        ></div>
                        <Link to={`/products/${itemData.product_id}`}>
                          <div className="product-edit-btn"></div>
                        </Link>
                      </div>
                    </div>
                  )}

                  <br />
                  <div className="fee-wrapper">
                    <div className="subtotal d-flex">
                      <p>SUBTOTAL</p>
                      <p className="fee">
                        {CurrencyFormatter.format(subtotal)}
                      </p>
                    </div>
                    <div className="taxandfee d-flex">
                      <p>TAX & FEE</p>
                      <p className="fee">{CurrencyFormatter.format(tax)}</p>
                    </div>
                    <div className="shipping d-flex">
                      <p>SHIPPING</p>
                      <p className="fee">{CurrencyFormatter.format(ship)}</p>
                    </div>
                    <div className="total d-flex">
                      <p>TOTAL</p>
                      <p className="fee">{CurrencyFormatter.format(bill)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-right">
                <div className="address-wrapper">
                  <header className="d-flex">
                    <h4>Address Details</h4>
                    <p>edit</p>
                  </header>
                  <section className="address-section">
                    <p className="delivery-address">
                      {" "}
                      <span>Delivery</span> to
                    </p>
                    <p className="address-details">
                      {UserData.delivery_address}
                    </p>
                    <p className="phone-number">{UserData.phone_number}</p>
                  </section>
                </div>{" "}
                <br />
                <div className="payment-wrapper d-flex">
                  <h4>Payment method</h4>
                  <form className="payment-form">
                    <div className="input-form d-flex">
                      <input
                        type="radio"
                        id="creditcard"
                        name="payment"
                      ></input>
                      <div className="label-icon creditcard"></div>
                      <label htmlFor="creditcard">Card</label>
                    </div>
                    <br />
                    <div className="input-form d-flex">
                      <input type="radio" id="bank-acc" name="payment"></input>
                      <div className="label-icon bank"></div>
                      <label htmlFor="bank-acc">Bank Account</label>
                    </div>
                    <br />
                    <div className="input-form d-flex">
                      <input type="radio" id="cod" name="payment"></input>
                      <div className="label-icon cod"></div>
                      <label htmlFor="cod">Cash On Delivery</label>
                    </div>
                  </form>
                </div>{" "}
                <br />
                <button
                  className="confirmandpay"
                  onClick={this.handlerCreateTransaction}
                >
                  Confirm and Pay
                </button>
              </div>
            </div>
          ) : (
            <section className="d-flex notfound payment-empty">
              <header>Oops!</header>
              <h1>You haven't added anything into your cart :(</h1>
            </section>
          )}
        </main>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemData: state.TransactionsReducer,
    UserData: state.UserReducer.getUserResult,
    token: state.SignInReducer.postUserLoginToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: (data) => {
      dispatch(createNewTransaction(data));
    },
    emptyCart: () => {
      dispatch(resetTransactionState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
