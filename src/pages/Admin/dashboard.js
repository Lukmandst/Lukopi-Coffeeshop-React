import React, { Component } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./admin.css";

class dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container dashboard-container">
          <header className="dashboard-header">
            See how your store progress so far
          </header>
          <main className="section-dashboard-wrapper d-flex">
            <section className="left-section-dashboard d-flex">
              <div className="report-wrapper">grafik</div>
              <button className="download-report-btn">Download Report </button>
            </section>
            <section className="right-section-dashboard d-flex">
              <div className="monthly-award-section">
                <header className="d-flex">
                  <img src="#" alt="img" />
                  <div>
                    <p>Cheryn Laurent</p>
                    <span>Keep up the good work and spread love</span>
                  </div>
                </header>
                <div>
                  <p>Best Staff of the Month</p>
                  <span>Achieved 3.5M of total 5M 478 Customers</span>
                </div>
              </div>
              <div className="goals-section">
                <header>
                  <p>Goals</p>
                  <span>Your goals is still on 76%. Keep up the good work!</span>
                </header>
              </div>
              <button className="share-report-btn">Share Report</button>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default dashboard;
