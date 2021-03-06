import React from "react";

function LeftDetails({ products }) {
  return (
    <>
      <section className="left-col-details">
        <div className="details-product-image">
          <img
            src={`${process.env.REACT_APP_HOST_API}${products.image}`}
            alt="product-img"
          />
        </div>
        <div className="product-desc">
          <header className="product-title">{products.name}</header>
          <p className="product-details">{products.details}</p>
          <div className="delivery-time-product">
            Delivery only on Monday - Friday
          </div>
        </div>
      </section>
    </>
  );
}

export default LeftDetails;
