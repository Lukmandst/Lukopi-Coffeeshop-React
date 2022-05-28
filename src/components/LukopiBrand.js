import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LukopiLogo from "../assets/image/stock/coffee 1.png";

export class LukopiBrand extends Component {
  render() {
    return (
      <div className="brand">
        <div className="brand-logo">
          <img src={LukopiLogo} alt="LukopiLogo" />
        </div>
        <div className="brand-name">Lukopi</div>
      </div>
    );
  }
}

export default LukopiBrand;
