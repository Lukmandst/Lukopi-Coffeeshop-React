import React, { Component } from "react";
import Footer from "../../components/Footer";
import "./signUp.css";
import axios from "axios";

class SignUp extends Component {
  state = {
    email: "",
    pass: "",
    phone: "",
  };
  render() {
    return (
      <div>
        <section className="login container d-inline">
          <div className="row">
            <div className="login-left col-md-6 col-lg-6 d-flex  justify-content-lg-end align-items-lg-end"></div>
            <div className="login-right col-md-6">
              <div className="container home">
                <div className="brand d-flex align-items-center">
                  <div>
                    <a href="/" className="brand-logo">
                      <img
                        src="/assets/image/stock/coffee 1.png"
                        alt="LukopiLogo"
                      />
                    </a>
                  </div>
                  <a href="/">Lukopi</a>
                </div>
                <div>
                  <a href="/login">
                    <button className="signup">Login</button>
                  </a>
                </div>
              </div>
              <div className="col login-form-wrapper">
                <div className="col">
                  <div className="header text-center">
                    <h2>Sign Up</h2>
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
                    />
                    <button
                      className="signin"
                      onClick={() => {
                        const { email, pass, phone } = this.state;
                        const body = {
                          email,
                          pass,
                          phone,
                        };
                        axios
                          .post("http://localhost:8080/auth/signup", body)
                          .then((result) => console.log(result.data))
                          .catch((error) => {
                            let dataError = error.response.data.error; //many errors in array
                            dataError.forEach((item) => { // show every errors 
                              console.log(item.msg);
                            });
                          });
                      }}
                    >
                      Sign Up
                    </button>
                    <button className="signin-google">
                      <img
                        src="/assets/image/stock/google-icon.png"
                        alt="google"
                        className="google-btn"
                      />
                      Sign Up with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="card-wrapper d-none d-lg-block">
          <div className="card justify-content-center align-items-center">
            <div className="card-body d-flex list-style-none">
              <ul>
                <li>
                  <h4 className="card-title">Get your member card now!</h4>
                </li>
                <li>
                  <p className="card-text">
                    Let's join with our member and enjoy the deals.
                  </p>
                </li>
              </ul>
              <a href="#" className="btn-create d-flex">
                Create Now
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
