import React, { Component } from "react";
import "./payment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

class Payment extends Component {
  state = {
    cartProduct: JSON.parse(localStorage.getItem("usercart")),
    isSuccess: false,
  };


  handlerCreateTransaction = (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const { cartProduct } = this.state;

    let product_id = cartProduct.id;
    let quantity = cartProduct.quantity;
    let product_size = cartProduct.size;

    let body = { product_id, quantity, product_size };
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    const url = "http://localhost:8080/transaction";
    axios
      .post(url, body, config)
      .then((result) => {
        console.log(result);
        this.setState({
          isSuccess: true,
        });
      })
      .catch((error) => console.error(error));
  };
  render() {
    return (
      <div>
        <Navbar login={true} />
        <section className="container-fluid payment-container">
          <div className="row">
            <div className="col payment-left">
              <header>
                <h1>Checkout your item now!</h1>
              </header>
              <div className="order-wrapper">
                <h3>Order Summary</h3>
                <div className="product-wrapper"></div>
                <div className="fee-wrapper">
                  <div className="subtotal d-flex">
                    <p>SUBTOTAL</p>
                    <p className="fee">IDR 120000</p>
                  </div>
                  <div className="taxandfee d-flex">
                    <p>TAX & FEE</p>
                    <p className="fee">IDR 20000</p>
                  </div>
                  <div className="shipping d-flex">
                    <p>SHIPPING</p>
                    <p className="fee">IDR 10000</p>
                  </div>
                  <div className="total d-flex">
                    <p>TOTAL</p>
                    <p className="fee">IDR 150000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col payment-right">
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
                    Km 5 refinery road oppsite re public road, effurun, Jakarta
                  </p>
                  <p className="phone-number">0-90099898</p>
                </section>
              </div>{" "}
              <br />
              <div className="payment-wrapper d-flex">
                <h4>Payment method</h4>
                <form className="payment-form">
                  <div className="input-form d-flex">
                    <input type="radio" id="creditcard"></input>
                    <div className="label-icon creditcard"></div>
                    <label htmlFor="creditcard">Card</label>
                  </div>
                  <br />
                  <div className="input-form d-flex">
                    <input type="radio" id="bank-acc"></input>
                    <div className="label-icon bank"></div>
                    <label htmlFor="bank-acc">Bank Account</label>
                  </div>
                  <br />
                  <div className="input-form d-flex">
                    <input type="radio" id="cod"></input>
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
        </section>
        <Footer />
      </div>
    );
  }
}

export default Payment;
