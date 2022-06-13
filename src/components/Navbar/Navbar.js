import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/navbar.css";

import LukopiBrand from "../LukopiBrand";
import NavMember from "./NavMember";
import NavMemberLogin from "./NavMemberLogin";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuAdmin from "./NavbarMenuAdmin";

class Navbar extends Component {
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
                {this.props.role === "admin" ? (
                  <NavbarMenuAdmin />
                ) : (
                  <NavbarMenu />
                )}
              </div>
            </ul>
            <div className="nav-member">
              {this.props.token ? <NavMemberLogin /> : <NavMember />}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.SignInReducer.postUserLoginToken,
    role: state.SignInReducer.postUserLoginRole,
  };
};

export default connect(mapStateToProps)(Navbar);
