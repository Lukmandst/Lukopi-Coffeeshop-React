import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/navbar.css";
import { useNavigate } from "react-router-dom";

function NavbarMenu({ page }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu mx-auto">
        <input
          className={`radio_input_nav d-none`}
          type="radio"
          name="menu"
          id="home"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          checked={page === "home" ? true : false}
          readOnly={true}
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
          readOnly={true}
        />
        <label htmlFor="product" className="radio_label_nav">
          product
        </label>
        <input
          className="radio_input_nav d-none"
          type="radio"
          name="menu"
          id="yourcart"
          onClick={(e) => {
            e.preventDefault();
            navigate("/yourcart");
          }}
          checked={page === "yourcart" ? true : false}
          readOnly={true}
        />
        <label htmlFor="yourcart" className="radio_label_nav">
          your Cart
        </label>
        <input
          className="radio_input_nav d-none"
          type="radio"
          name="menu"
          id="history"
          onClick={(e) => {
            e.preventDefault();
            navigate("/history");
          }}
          checked={page === "history" ? true : false}
          readOnly={true}
        />
        <label htmlFor="history" className="radio_label_nav">
          history
        </label>
      </div>
    </>
  );
}

export default NavbarMenu;
