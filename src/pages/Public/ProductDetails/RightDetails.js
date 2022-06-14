import React, { Component } from "react";
import { connect } from "react-redux";
import { CurrencyFormatter } from "../../../helper/CurrencyFormatter";
import { addItemToCart } from "../../../Redux/actions/transactionActions";

class RightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      delivery: "Dine In",
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
    const { delivery, quantity } = this.state;
    e.preventDefault();
    this.props.addToCart({
      quantity: quantity,
      delivery: delivery,
      showMiniCart: true,
    });
    // localStorage.setItem(
    //   "usercart",
    //   JSON.stringify({
    //     id: productid,
    //     quantity: quantity,
    //     size: size,
    //     delivery: delivery,
    //   })
    // );
    // this.setState({
    //   showMiniCart: true,
    // });
    // const carti = JSON.parse(localStorage.getItem("usercart"));
    // console.log(carti);
  };
  render() {
    // console.log(this.props.addToCart)
    return (
      <>
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
                <label htmlFor="Dine-In" className="radio_label dine-in-btn">
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
                <label htmlFor="Pick-Up" className="radio_label dine-in-btn">
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
              <div className="product-price">
                {CurrencyFormatter.format(this.props.products.price)}
              </div>
            </div>
            <button className="add-to-cart-btn" onClick={this.handleAddtoCart}>
              Add to Cart
            </button>
            <button className="ask-a-staff-btn">Ask a Staff</button>
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => {
      dispatch(addItemToCart(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(RightDetails);
