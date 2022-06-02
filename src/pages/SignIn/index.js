import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import "../../pages/SignIn/signIn.css";
import Footer from "../../components/Footer";
import "./signIn.css";
import Googleimg from "../../assets/image/stock/google-icon.png";
import CardMember from "../../components/CardMember";
import Logo from "../../assets/image/stock/coffee 1.png";

class SignIn extends Component {
  state = {
    email: "",
    pass: "",
    isSuccess: false,
    isError: false,
    errormsg: "",
  };
  render() {
    // if (this.state.isSuccess === true) {
    //   return <Navigate to="/" />;
    // }
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
                  <div className="login-form">
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
                    
                    {this.state.isSuccess ? (
                      <div className="alert alert-success" role="alert">
                        Login Success <Link to="/">click to redirect</Link>
                      </div>
                    ) : (
                      <></>
                    )}
                    {this.state.isError ? (
                      <div className="alert alert-danger" role="alert">
                        {this.state.errormsg}
                      </div>
                    ) : (
                      <></>
                    )}
                    <button
                      className="signin"
                      onClick={(e) => {
                        e.preventDefault();
                        const { email, pass } = this.state;
                        const body = {
                          email,
                          pass,
                        };
                        axios
                          .post("http://localhost:8080/auth/", body)
                          .then((result) => {
                            console.log(result.data.data); //show email, name, token
                            localStorage.setItem(
                              "userinfo",
                              JSON.stringify(result.data.data)
                            );
                            this.setState({
                              isSuccess: true,
                            });
                          })
                          .catch((error) => {
                            console.log(error.response.data.err.msg); //show error msg
                            this.setState({
                              isError: true,
                              errormsg: `${error.response.data.err.msg}`,
                            });
                          });
                      }}
                    >
                      Login
                    </button>
                    <button className="signin-google">
                      <img
                        src={Googleimg}
                        alt="google"
                        className="google-btn"
                      />
                      Login with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CardMember />
        <Footer />
      </div>
    );
  }
}

export default SignIn;
