import React, { Component } from "react";
import { connect } from "react-redux/es/exports";
import axios from "axios";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
import { createNewTransaction } from "../../../Redux/actions/transactionActions";

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

    this.props.createOrder({
      product_id: this.props.itemData.product_id,
      product_size: this.props.itemData.size,
      quantity: this.props.itemData.quantity,
      delivery: this.props.itemData.delivery,
      token: this.props.token,
    });
    // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    // const { cartProduct } = this.state;

    // let product_id = cartProduct.id;
    // let quantity = cartProduct.quantity;
    // let product_size = cartProduct.size;

    // let body = { product_id, quantity, product_size };
    // const config = {
    //   headers: { Authorization: `Bearer ${userInfo.token}` },
    // };
    // const url = "http://localhost:8080/transaction";
    // axios
    //   .post(url, body, config)
    //   .then((result) => {
    //     console.log(result);
    //     localStorage.removeItem("usercart");
    //     this.setState({
    //       isSuccess: true,
    //     });
    //   })
    //   .catch((error) => console.error(error));
  };

  async componentDidMount() {
    try {
      const url = `http://localhost:8080/product?id=${this.props.itemData.product_id}`;
      const result = await axios.get(url);
      const productsArray = result.data.data;
      this.setState({
        products: productsArray[0],
      });
    } catch (error) {
      console.error(error);
    }
    let tax = parseInt(this.state.products.price) * 0.1;
    let Bill = tax + parseInt(this.state.products.price);
    this.setState({
      tax: tax,
      Bill: Bill,
    });
  }

  render() {
    const { products, Bill, tax } = this.state;
    const { UserData, itemData,token } = this.props;
    console.log(token)
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
                      IDR {products.price}
                    </div>
                  </div>
                )}

                <br />
                <div className="fee-wrapper">
                  <div className="subtotal d-flex">
                    <p>SUBTOTAL</p>
                    <p className="fee">
                      IDR {products.price ? products.price : 0}
                    </p>
                  </div>
                  <div className="taxandfee d-flex">
                    <p>TAX & FEE</p>
                    <p className="fee">IDR {tax ? tax : 0}</p>
                  </div>
                  <div className="shipping d-flex">
                    <p>SHIPPING</p>
                    <p className="fee">IDR {itemData ? 10000 : 0}</p>
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
                  <p className="address-details">{UserData.delivery_address}</p>
                  <p className="phone-number">{UserData.phone_number}</p>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);