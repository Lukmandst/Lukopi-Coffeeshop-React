import "../CSS/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import LukopiBrand from "../LukopiBrand";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import NavMember from "./NavMember";
import NavMemberLogin from "./NavMemberLogin";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuAdmin from "./NavbarMenuAdmin";

class Navbar extends Component {
  // state = {
  //   token: localStorage.getItem("userinfo"),
  // };

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
                {/* <NavbarMenu/> */}
                <NavbarMenuAdmin/>
              </div>
            </ul>
            <div className="nav-member">
              {this.props.userPersist ? <NavMemberLogin /> : <NavMember />}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPersist: state.SignInReducer.postUserLoginToken,
  };
};

export default connect(mapStateToProps)(Navbar) ;
