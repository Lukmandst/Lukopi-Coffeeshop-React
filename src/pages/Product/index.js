import React, { Component } from 'react'
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar";
import "./product.css"


class Product extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <section className="product">
      <div className="container">
        <div className="row">
          <div className="col left-panel">
            <h3>Promo Today</h3>
            <p style="margin-bottom: 70px;">Coupons will be updated every weeks. Check them out!</p>
            <div className="coupon">
              <button className="coupon-btn mom">
                <img src="/assets/image/stock/mom.png" alt="mom" />
                <ul>
                  <li style="font-weight: 700;">HAPPY MOTHER'S DAY!</li>
                  <li>Get one of our favorite menu for free!</li>
                </ul>
              </button>
              <button className="coupon-btn dad">
                <img src="/assets/image/stock/dad.png" alt="dad" />
                <ul>
                  <li style="font-weight: 700;">Get a cup of coffee for free on sunday morning</li>
                  <li>Only at 7 to 9 AM</li>
                </ul>
              </button>
              <button className="coupon-btn mom ">
                <img src="/assets/image/stock/mom.png" alt="mom" />
                <ul>
                  <li style="font-weight: 700;">HAPPY MOTHER'S DAY!</li>
                  <li>Get one of our favorite menu for free!</li>
                </ul>
              </button>
              <button className="coupon-btn pirate">
                <img src="/assets/image/stock/pirate.png" alt="pirate"/>
                <ul>
                  <li style="font-weight: 700;">HAPPY HALLOWEEN!</li>
                  <li>
                    Do you like chicken wings? Get 1 free only if you buy pinky
                    promise
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
                <ul className="menu mx-auto">
                  <li className="menu-item-home">
                    <a className="active" href="/">Favorite & Promo</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="menu-link">Coffee</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="menu-link">Non Coffee</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="menu-link">Foods</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="menu-link">Add-on</a>
                  </li>
                </ul>
              </div>
              <div className="show-product">
                <div className="col col-wrapper d-flex">
                  <div className="product-icon">
                    <div className="disc">10%</div>
                    <div
                      style="
                        background-image: url(/assets/image/product/Veggie\ tomato\ mix.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Veggie tomato mix</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div
                      style="
                        background-image: url(/assets/image/product/Hazelnut\ latte.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Hazelnut latte</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div className="disc">13%</div>
                    <div
                      style="
                        background-image: url(/assets/image/product/Summer\ Fried\ rice.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Summer fried rice</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div
                      style="
                        background-image: url(/assets/image/product/creamy\ ice\ latte.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Creamy Ice Latte</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                </div>
                <div className="col col-wrapper d-flex">
                  <div className="product-icon">
                    <div className="disc">20%</div>
                    <div
                      style="
                        background-image: url(/assets/image/product/drum\ stick.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Drum Sticks</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div
                      style="
                        background-image: url(/assets/image/product/salty\ rice.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Salty Rice</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div className="disc">15%</div>
                    <div
                      style="
                        background-image: url(/assets/image/product/Summer\ Fried\ rice.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Summer Fried Rice</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div
                      style="
                        background-image: url(/assets/image/product/creamy\ ice\ latte.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Creamy Ice Latte</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                </div>
                <div className="col col-wrapper d-flex">
                  <div className="product-icon">
                    <div
                      style="
                        background-image: url(/assets/image/product/Veggie\ tomato\ mix.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Veggie tomato mix</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div className="disc">22%</div>
                    <div
                      style="
                        background-image: url(/assets/image/product/Hazelnut\ latte.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Hazelnut Latte</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div
                      style="
                        background-image: url(/assets/image/product/Summer\ Fried\ rice.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Summer fried rice</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                  <div className="product-icon">
                    <div className="disc">10%</div>
                    <div
                      style="
                        background-image: url(/assets/image/product/creamy\ ice\ latte.png);
                        background-size: cover;
                      "
                    ></div>
                    <p className="product-name">Creamy Ice Latte</p>
                    <p className="-product-price">IDR 34.000</p>
                  </div>
                </div>
                <p className="notes">*the price has been cutted by discount appears</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          <Footer/>
      </div>
    )
  }
}

export default Product