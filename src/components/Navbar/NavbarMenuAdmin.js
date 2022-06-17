import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarMenuAdmin({page}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu mx-auto">
        <input
          className="radio_input_nav d-none"
          type="radio"
          name="menu"
          id="home"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          checked={page === "home" ? true : false}
        />
        <label htmlFor="home" className="radio_label_nav">
          home
        </label>
        <input
          className="radio_input_nav d-none"
          type="radio"
          name="menu"
          id="product"
          onClick={(e) => {
            e.preventDefault();
            navigate("/products");
          }}
          checked={page === "product" ? true : false}
        />
        <label htmlFor="product" className="radio_label_nav">
          product
        </label>
        <input
          className="radio_input_nav d-none"
          type="radio"
          name="menu"
          id="Orders"
          onClick={(e) => {
            e.preventDefault();
            navigate("/orders");
          }}
          checked={page === "orders" ? true : false}
        />
        <label htmlFor="Orders" className="radio_label_nav">
          your Cart
        </label>
        <input
          className="radio_input_nav d-none"
          type="radio"
          name="menu"
          id="Dashboard"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
          checked={page === "dashboard" ? true : false}
        />
        <label htmlFor="Dashboard" className="radio_label_nav">
          Dashboard
        </label>
      </div>
    </>
  );
}

export default NavbarMenuAdmin;
