import "../../src/components/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import LukopiBrand from "./LukopiBrand";
import { Link } from "react-router-dom";


export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid nav-wrapper">
          <Link to="/">
          <LukopiBrand/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto">
              <div className="menu-wrapper">
                <ul className="menu mx-auto">
                  <li className="menu-item-home">
                    <Link to="/signin">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/product">
                    Product</Link>
                  </li>
                  <li className="menu-item">
                    <a href="/yourCart" className="menu-link">
                      Your Cart
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="history" className="menu-link">
                      History
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <div className="nav-member">
              
              <button className="button-login" >
                Sign In
              </button>
              <button className="button-signup" href="#">
                <a href="/signUp">Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar;
