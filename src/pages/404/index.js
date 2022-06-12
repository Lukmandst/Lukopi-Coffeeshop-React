import React, { Component } from "react";
import "./404.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <section className="col d-flex notfound">
            <header>Oops!</header>
            <h1>The page you are looking for can't be found</h1>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default NotFound;
