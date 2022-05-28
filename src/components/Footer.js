import React, { Component } from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LukopiLogo from "../assets/image/stock/coffee 1.png";

class Footer extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-space-between">
      <div className="row f-wrapper justify-content-center">
        <div className="col-sm-6 col-md-4 item main">
          <div className="logo d-flex text-center">
            <a href="/">
              <div className="brand-logo">
                <img
                  src={LukopiLogo}
                  alt="LukopiLogo"
                />
              </div>
            </a>
            <a href="/" className="brand-name">Lukopi</a>
          </div>
          <p className="desc-footer">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <div className="socmed-wrap d-flex">
            <a href="/"><div className="circle fb"></div></a>
            <a href="/"><div className="circle twt"></div></a>
            <a href="/"><div className="circle ig"></div></a>
          </div>
          <p
            className="copyright"
          >
            Lukopi © 2022
          </p>
        </div>
        <div className="col-sm-6 col-md-4 item side d-none d-lg-block">
          <div className="wrapper one">
            <h4>Product</h4>
            <ul>
              <li className="item-download">
                <a href="/">Download</a>
              </li>
              <li className="item-pricing">
                <a href="/">Pricing</a>
              </li>
              <li className="item-locations">
                <a href="/">Locations</a>
              </li>
              <li className="item-countries">
                <a href="/">Countries</a>
              </li>
              <li className="item-blog">
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 item side d-none d-lg-block">
          <div className="wrapper two">
            <h4>Engage</h4>
            <ul>
              <li className="item-coffeshop">
                <a href="/">Coffe Shop ?</a>
              </li>
              <li className="item-faq">
                <a href="/">FAQ</a>
              </li>
              <li className="item-aboutus">
                <a href="/">About Us</a>
              </li>
              <li className="item-privacypolicy">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="item-tos">
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;
