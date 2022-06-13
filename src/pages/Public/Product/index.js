import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListProducts } from "../../../Redux/actions/productActions";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar/Navbar";

import withParams from "../../../helper/WithParams";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

import "./product.css";

function Product() {
  //dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    //call action getListProduct
    dispatch(getListProducts());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <section className="product">
        <div className="container">
          <div className="row">
            <LeftPanel />
            <RightPanel />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default withParams(Product);
