import React, { Component } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

import "./404.css";

class NotFound extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <section className="col d-flex notfound">
            <header>Oops!</header>
            <h1>The page you are looking for can't be found</h1>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default NotFound;
