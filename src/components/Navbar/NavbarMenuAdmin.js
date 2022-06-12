import React from "react";
import { Link } from "react-router-dom";

function NavbarMenuAdmin() {
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
          <Link to="/orders" className="menu-link">
            Orders
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/dashboard" className="menu-link">
            Dashboard
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavbarMenuAdmin;
