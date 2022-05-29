import React, { Component } from "react";
import "./history.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HistoryIcon from "../../components/HistoryIcon";

class History extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="container-fluid history-wrapper">
          <div className="row">
            <div className="col history-col">
              <header className="history-header">
                <h1 className="history-title">
                  Let's see what you have bought!
                </h1>
                <p className="history-subtitle">Long press to delete item</p>
              </header>
              <section className="history-section d-flex">
                <HistoryIcon />
                <HistoryIcon />
                <HistoryIcon />
                <HistoryIcon />
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default History;
