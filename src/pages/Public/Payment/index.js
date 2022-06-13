import React, { Component } from "react";
import axios from "axios";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";

class Payment extends Component {
  state = {
    cartProduct: JSON.parse(localStorage.getItem("usercart")),
    isSuccess: false,
    products: [],
    tax: 0,
    Bill: 0,
    userAddress: "",
    userphone: "",
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
        localStorage.removeItem("usercart");
        this.setState({
          isSuccess: true,
        });
      })
      .catch((error) => console.error(error));
  };

  async componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("usercart")));

    try {
      const { token } = JSON.parse(localStorage.getItem("userinfo"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const userResult = await axios.get(
        "http://localhost:8080/user/info",
        config
      );
      let product_id = this.state.cartProduct.id
        ? this.state.cartProduct.id
        : 0;
      const url = `http://localhost:8080/product?id=${product_id}`;
      const result = await axios.get(url);
      const productsArray = result.data.data;
      console.log(productsArray[0]);

      console.log(userResult.data.data[0]);
      this.setState({
        products: productsArray[0],
        userAddress: userResult.data.data[0].delivery_address,
        userphone: userResult.data.data[0].phone_number,
      });
    } catch (error) {
      console.error(error);
    }
    let tax = parseInt(this.state.products.price) * 0.1;
    let Bill = tax + parseInt(this.state.products.price);
    console.log(Bill);
    this.setState({
      tax: tax,
      Bill: Bill,
    });
  }

  render() {
    const { products, Bill, tax, userAddress, userphone } = this.state;
    return (
      <div>
        <Navbar />
        <section className="container-fluid payment-container">
          <div className="row">
            <div className="col payment-left">
              <header>
                <h1>Checkout your item now!</h1>
              </header>
              <div className="order-wrapper">
                <h3>Order Summary</h3>
                <br />
                {this.state.cartProduct && (
                  <div className="product-wrapper d-flex">
                    <div className="img-prdct">
                      <img
                        src={`http://localhost:8080${products.image}`}
                        alt="product-icon"
                      />
                    </div>
                    <div className="product-details-payment">
                      <header>{products.name}</header>
                      <p className="size-item-payment">
                        <span className="amount-item-payment">
                          x
                          {this.state.cartProduct.quantity
                            ? this.state.cartProduct.quantity
                            : 0}
                          <br />
                        </span>
                        ({this.state.cartProduct.size})
                      </p>
                    </div>
                    <div className="payment-prdct-price">
                      IDR {products.price}
                    </div>
                  </div>
                )}

                <br />
                <div className="fee-wrapper">
                  <div className="subtotal d-flex">
                    <p>SUBTOTAL</p>
                    <p className="fee">IDR {products.price?products.price:0}</p>
                  </div>
                  <div className="taxandfee d-flex">
                    <p>TAX & FEE</p>
                    <p className="fee">IDR {tax?tax:0}</p>
                  </div>
                  <div className="shipping d-flex">
                    <p>SHIPPING</p>
                    <p className="fee">IDR 10000</p>
                  </div>
                  <div className="total d-flex">
                    <p>TOTAL</p>
                    <p className="fee">IDR {Bill + 10000}</p>
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
                  <p className="address-details">{userAddress}</p>
                  <p className="phone-number">{userphone}</p>
                </section>
              </div>{" "}
              <br />
              <div className="payment-wrapper d-flex">
                <h4>Payment method</h4>
                <form className="payment-form">
                  <div className="input-form d-flex">
                    <input type="radio" id="creditcard" name="payment"></input>
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
        </section>
        <Footer />
      </div>
    );
  }
}

export default Payment;
