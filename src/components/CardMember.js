import React from "react";
import "./CSS/cardmember.css";

function CardMember() {
  return (
    <section className="card-wrapper-member d-none d-lg-block">
      <div className="card-body d-flex list-style-none">
        <div>
          <h4 className="card-title">Get your member card now!</h4>
          <p className="card-text">
            Let's join with our member and enjoy the deals.
          </p>
        </div>
        <button className="btn-create">Create Now</button>
      </div>
    </section>
  );
}

export default CardMember;
