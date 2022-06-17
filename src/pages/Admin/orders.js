import React, { Component } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

class orders extends Component {
  render() {
    return (
      <>
        <Navbar page="orders" />
        <div className="container">orders</div>
        <Footer />
      </>
    );
  }
}

export default orders;
