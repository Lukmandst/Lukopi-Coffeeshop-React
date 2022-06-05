import React, { Component } from "react";
import "./history.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HistoryIcon from "../../components/HistoryIcon";
import axios from "axios";

class History extends Component {
  state = {
    historyData: [],
  };

  async componentDidMount() {
    
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    try {
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      const url = "http://localhost:8080/transaction/history/";
      const result = await axios.get(url, config);
      this.setState({
        historyData: result.data.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Navbar login={true}/>
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
                {Array.isArray(this.state.historyData) ? (
                  this.state.historyData.map((result) => (
                    <HistoryIcon key={result.id} data={result} />
                  ))
                ) : (
                  <></>
                )}
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
