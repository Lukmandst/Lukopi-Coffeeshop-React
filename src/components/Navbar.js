import "./CSS/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import LukopiBrand from "./LukopiBrand";
import { Link } from "react-router-dom";
import NavMember from "./NavMember";
import NavMemberLogin from "./NavMemberLogin";

class Navbar extends Component {
  state = {
    token: localStorage.getItem("userinfo"),
  };

  // componentDidMount() {
  //   this.setState({
  //     isLoggedin: this.props.login,
  //   });
  // }

  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid nav-wrapper">
          <Link to="/">
            <LukopiBrand />
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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/products">Product</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/yourCart" className="menu-link">
                      Your Cart
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/history" className="menu-link">
                      History
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <div className="nav-member">
              {this.state.token && <NavMemberLogin />}
              {!this.state.token ? <NavMember /> : <></>}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
