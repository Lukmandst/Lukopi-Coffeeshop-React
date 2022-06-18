import React, { Component } from "react";

import Footer from "../../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./forgotpass.css";

class ForgotPass extends Component {
  componentDidMount(){
    document.title = "Lukopi - Forgot Password";
  }
  render() {
    return (
      <>
        <section className="container-fluid">
          <div className="row forgot-row">
            <div className="col forgot-wrapper d-flex">
              <header className="forgot-header">
                <h1>Forgot your password?</h1>
                <p className="sub-forgot"> Don't worry, we got your back!</p>
              </header>
              <form className="send-email-form d-flex">
                <input
                  type="email"
                  placeholder="Enter your email adress to get link"
                ></input>
                <button className="send-btn">Send</button>
              </form>
              <section>
                <p className="resend-info">
                  Click here if you didn't receive any link in 2 minutes
                </p>
                <button className="resend-btn">Resend Link</button>
                <p>timer</p>
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default ForgotPass;
