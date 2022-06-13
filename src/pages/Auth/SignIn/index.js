import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import CardMember from "../../../components/CardMember";
import Footer from "../../../components/Footer";

import Googleimg from "../../../assets/image/stock/google-icon.png";
import Logo from "../../../assets/image/stock/coffee 1.png";

import { postUserLogin } from "../../../Redux/actions/userActions";


import "./signIn.css";

class SignIn extends Component {
  state = {
    email: "",
    pass: "",
    isSuccess: false,
    isError: false,
    errormsg: "",
    showModal: false,
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk handle submit");
    this.props.doLogin({
      email: this.state.email,
      pass: this.state.pass,
    });
  };

  render() {
    const { isSuccess, isError, errormsg, showModal } = this.state;

    if ((isSuccess === true) & (showModal === false)) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <section className="container-fluid">
          <div className="row">
            <div className="login-left col-md-6 col-lg-6 d-flex  justify-content-lg-end align-items-lg-end"></div>
            <div className="login-right col-md-6">
              <div className="container home">
                <div className="brand d-flex align-items-center">
                  <div>
                    <Link to="/" className="brand-logo">
                      <img src={Logo} alt="LukopiLogo" />
                    </Link>
                  </div>
                  <Link to="/">Lukopi</Link>
                </div>
                <div>
                  <Link to="/signUp">
                    <button className="signup">Sign Up</button>
                  </Link>
                </div>
              </div>
              <div className="col login-form-wrapper">
                <div className="col">
                  <div className="header text-center">
                    <h2>Login</h2>
                  </div>
                  <form
                    className="login-form"
                    onSubmit={this.handleSubmit}
                  >
                    <label htmlFor="Email" className="form-label">
                      Email address :{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Enter your email address"
                      onChange={(e) => {
                        this.setState({
                          email: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="password" className="form-label">
                      Password :{" "}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => {
                        this.setState({
                          pass: e.target.value,
                        });
                      }}
                    />
                    <Link to="/forgot">Forgot password?</Link> <br />
                    <input
                      type="submit"
                      value="Sign In"
                      className="signin"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   const { email, pass } = this.state;
                      //   const body = {
                      //     email,
                      //     pass,
                      //   };
                      //   axios
                      //     .post("http://localhost:8080/auth/", body)
                      //     .then((result) => {
                      //       console.log(result.data.data); //show email, name, token
                      //       localStorage.setItem(
                      //         "userinfo",
                      //         JSON.stringify(result.data.data)
                      //       );
                      //       localStorage.removeItem("tokenExp");
                      //       this.setState({
                      //         showModal: true,
                      //         isSuccess: true,
                      //         isError: false,
                      //       });
                      //     })
                      //     .catch((error) => {
                      //       console.log(error.response.data.err.msg); //show error msg
                      //       this.setState({
                      //         showModal: true,
                      //         isError: true,
                      //         errormsg: `${error.response.data.err.msg}`,
                      //       });
                      //     });
                      // }}
                    />
                    <button className="signin-google">
                      <img
                        src={Googleimg}
                        alt="google"
                        className="google-btn"
                      />
                      Login with Google
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CardMember />
        <Footer />

        <Modal show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Lukopi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isSuccess ? (
              <div className="alert alert-success" role="alert">
                Login Success close to redirect
              </div>
            ) : (
              <></>
            )}
            {isError ? (
              <div className="alert alert-danger" role="alert">
                {errormsg}
              </div>
            ) : (
              <></>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (data) => {
      dispatch(postUserLogin(data));
    },
  };
};

export default connect(null,mapDispatchToProps)(SignIn);
