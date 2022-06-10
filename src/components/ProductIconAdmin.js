import React from "react";
import { Link } from "react-router-dom";
import "./CSS/productIcon.css";

function ProductIconAdmin({ data }) {
  // const navigate = useNavigate();

  // // const handleGoToDetail = (id) => {
  // //   navigate(`${id}`);
  // // };

  return (
      <div
        key={data.id}
        className="product-icon-admin"
        // onClick={() => {
        //   handleGoToDetail(data.id);
        // }}
      >
        <div className="disc">10%</div>
        <div className="product-image">
          <img src={`http://localhost:8080${data.image}`} alt="product-img" />
        </div>
        <p className="product-name">{data.name}</p>
        <p className="-product-price">IDR {data.price}</p>
        <Link to={`${data.id}`}>
          <div className="edit-icon-btn"> </div>
        </Link>
      </div>
  );
}

export default ProductIconAdmin;
