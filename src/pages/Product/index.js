import React, { Component } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import ProductIcon from "../../components/ProductIcon";
import "./product.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Mom from "../../assets/image/stock/mom.png";
import Dad from "../../assets/image/stock/dad.png";
import Pirate from "../../assets/image/stock/pirate.png";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      productName: "",
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8080/product/all";
    try {
      const result = await axios.get(url);
      const productsArray = result.data.data;
      const productsMeta = result.data.meta;
      console.log(productsArray);
      console.log(productsMeta);
      this.setState({
        products: productsArray,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col left-panel">
                <h3>Promo Today</h3>
                <p className="subpromo">
                  Coupons will be updated every weeks. Check them out!
                </p>
                <div className="coupon">
                  <button className="coupon-btn mom">
                    <img src={Mom} alt="mom" />
                    <ul>
                      <li className="coupon-title">HAPPY MOTHER'S DAY!</li>
                      <li>Get one of our favorite menu for free!</li>
                    </ul>
                  </button>
                  <button className="coupon-btn dad">
                    <img src={Dad} alt="dad" />
                    <ul>
                      <li className="coupon-title">
                        Get a cup of coffee for free on sunday morning
                      </li>
                      <li>Only at 7 to 9 AM</li>
                    </ul>
                  </button>
                  <button className="coupon-btn mom ">
                    <img src={Mom} alt="mom" />
                    <ul>
                      <li className="coupon-title">HAPPY MOTHER'S DAY!</li>
                      <li>Get one of our favorite menu for free!</li>
                    </ul>
                  </button>
                  <button className="coupon-btn pirate">
                    <img src={Pirate} alt="pirate" />
                    <ul>
                      <li className="coupon-title">HAPPY HALLOWEEN!</li>
                      <li>
                        Do you like chicken wings? Get 1 free only if you buy
                        pinky promise
                      </li>
                    </ul>
                  </button>
                  <button className="apply-btn">Apply Coupon</button>
                </div>
                <ul className="terms-wrapper">
                  <span>Terms and Condition</span>
                  <li>1. You can only apply 1 coupon per day</li>
                  <li>2. It only for dine in</li>
                  <li>3. Buy 1 get 1 only for new user</li>
                  <li>4. Should make member card to apply coupon</li>
                </ul>
              </div>
              <div className="col right-panel">
                <div className="container">
                  <div className="category-wrapper">
                    <ul className="category-menu mx-auto">
                      <li className="menu-item-home">
                        <Link className="active" to="/">
                          Favorite & Promo
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="menu-link">
                          Coffee
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="menu-link">
                          Non Coffee
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="menu-link">
                          Foods
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="menu-link">
                          Add-on
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="show-product">
                    <div className=" product-wrapper d-flex">
                      {Array.isArray(this.state.products) ? (
                        this.state.products.map((product) => (
                          <button key={product.id} className="product-icon">
                            <div className="disc">10%</div>
                            <div className="product-image">
                              <img
                                src={`http://localhost:8080${product.image}`}
                                alt={product.name}
                              />
                            </div>
                            <p className="product-name">{product.name} </p>
                            <p className="-product-price">
                              IDR {product.price}
                            </p>
                          </button>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <p className="notes">
                  *the price has been cutted by discount appears
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Product;
