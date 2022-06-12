import React from "react";
import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <>
      <ul className="menu mx-auto">
        <li className="menu-item-home">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/products">Product</Link>
        </li>
        <li className="menu-item">
          <Link to="/yourCart" className="menu-link">
            Your Cart
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/history" className="menu-link">
            History
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavbarMenu;
