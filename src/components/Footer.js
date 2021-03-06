import React, { Component } from "react";
import { Link } from "react-router-dom";

import LukopiLogo from "../assets/image/stock/coffee 1.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="container-fluid">
          <div className="footer-wrapper container d-flex">
            <main className="footer-profile">
              <div className="logo d-flex text-center">
                <Link to="/">
                  <div className="brand-logo">
                    <img src={LukopiLogo} alt="LukopiLogo" />
                  </div>
                </Link>
                <Link to="/" className="brand-name">
                  Lukopi
                </Link>
              </div>
              <p className="desc-footer">
                Coffee Shop is a store that sells some good meals, and
                especially coffee. We provide high quality beans
              </p>
              <div className="socmed-wrap d-flex">
                <Link to="#">
                  <div className="circle fb"></div>
                </Link>
                <Link to="#">
                  <div className="circle twt"></div>
                </Link>
                <Link to="#">
                  <div className="circle ig"></div>
                </Link>
              </div>
              <p className="copyright">Lukopi © 2022</p>
            </main>
            <section className="footer-section-wrapper d-flex">
              <section className="footer-product">
                <h4>Product</h4>
                <ul>
                  <li className="item-download">
                    <Link to="#">Download</Link>
                  </li>
                  <li className="item-pricing">
                    <Link to="#">Pricing</Link>
                  </li>
                  <li className="item-locations">
                    <Link to="#">Locations</Link>
                  </li>
                  <li className="item-countries">
                    <Link to="#">Countries</Link>
                  </li>
                  <li className="item-blog">
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
              </section>
              <section className="footer-engage">
                <h4>Engage</h4>
                <ul>
                  <li className="item-coffeshop">
                    <Link to="/">Coffe Shop ?</Link>
                  </li>
                  <li className="item-faq">
                    <Link to="#">FAQ</Link>
                  </li>
                  <li className="item-aboutus">
                    <Link to="#">About Us</Link>
                  </li>
                  <li className="item-privacypolicy">
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li className="item-tos">
                    <Link to="#">Terms of Service</Link>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
