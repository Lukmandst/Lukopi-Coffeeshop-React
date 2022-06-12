import React, { Component } from "react";
import Footer from "../../../components/Footer";
import "./signUp.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Googleimg from "../../../assets/image/stock/google-icon.png";
import CardMember from "../../../components/CardMember";
import Logo from "../../../assets/image/stock/coffee 1.png";

class SignUp extends Component {
  state = {
    email: "",
    pass: "",
    phone: "",
    isSuccess: false,
    isError: false,
    isDuplicate: false,
    succesmsg: "",
    errormsg: [],
    errormsgone: "",
    showModal: false,
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { isSuccess, isError, succesmsg, errormsg, showModal } = this.state;

    if ((isSuccess === true) & (showModal === false)) {
      return <Navigate to="/signin" />;
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
                  <Link to="/signin">
                    <button className="signup">Sign In</button>
                  </Link>
                </div>
              </div>
              <div className="col login-form-wrapper">
                <div className="col">
                  <div className="header text-center">
                    <h2>Sign Up</h2>
                  </div>
                  <form className="login-form">
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
                    {this.state.errormsgone.length > 1 ? (
                      this.setState({
                        isDuplicate: true,
                      })
                    ) : (
                      <></>
                    )}
                    {this.state.isDuplicate ? (
                      <div className="alert alert-danger mt-3" role="alert">
                        {this.state.errormsgone}
                      </div>
                    ) : (
                      <></>
                    )}
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
                    <label htmlFor="pNumber" className="form-label">
                      Phone Number :{" "}
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="pNumber"
                      placeholder="Enter your phone number"
                      onChange={(e) => {
                        this.setState({
                          phone: e.target.value,
                        });
                      }}
                    />{" "}
                    <br />
                    {this.state.isError &&
                    Array.isArray(this.state.errormsg) ? (
                      this.state.errormsg.map((erroritem) => (
                        <div
                          key={erroritem.msg}
                          className="alert alert-danger"
                          role="alert"
                        >
                          {erroritem.msg}
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                    <input
                      type="submit"
                      value="Sign Up"
                      className="signin"
                      onClick={(e) => {
                        e.preventDefault();
                        const { email, pass, phone } = this.state;
                        const body = {
                          email,
                          pass,
                          phone,
                        };
                        axios
                          .post("http://localhost:8080/auth/signup", body)
                          .then((result) => {
                            console.log(result.data);
                            this.setState({
                              succesmsg: result.data.msg,
                              isSuccess: true,
                              isError: false,
                              showModal: true,
                            });
                          })
                          .catch((error) => {
                            let dataError = error.response.data.error;
                            // let oneError = error.response.data;
                            // console.log(oneError)
                            // console.log(dataError); //many errors in array
                            if (dataError === undefined) {
                              console.log("validator kosong");
                              let oneError = error.response.data.err.msg;
                              console.log(oneError);
                              this.setState({
                                isError: true,
                                isSuccess: false,
                                isDuplicate: true,
                                errormsgone: oneError,
                              });
                            }
                            this.setState({
                              isError: true,
                              isSuccess: false,
                              isEmail: true,
                              errormsg: dataError,
                            });
                          });
                      }}
                    />
                    <button className="signin-google">
                      <img
                        src={Googleimg}
                        alt="google"
                        className="google-btn"
                      />
                      Sign Up with Google
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
                {succesmsg}
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

export default SignUp;
