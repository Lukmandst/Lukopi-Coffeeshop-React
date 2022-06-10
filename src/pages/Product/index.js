import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./product.css";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import withParams from "../../helper/WithParams";
import { useDispatch } from "react-redux";
import { getListProducts } from "../Redux/actions/productActions";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function Product() {
  const [products, setProduct] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  //dispatch
  const dispatch = useDispatch();


  const handleForCoffee = () => {
    searchParams.get({ category: "coffee" });
    const parameter = "?category=07e88ba9-1a54-46ab-bf2c-3dc8831090a4";
    const url = `http://localhost:8080/product${parameter}`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data.data);
        setProduct(result.data.data);
        setSearchParams({ category: "Coffee" });
      })
      .catch((error) => console.error(error));
    // <Link to={`${parameter}`} />;
  };
  const handleForNonCoffee = () => {
    const parameter = "?category=30b95dde-a820-41dd-b474-902026e3e755";
    const url = `http://localhost:8080/product${parameter}`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data.data);
        setProduct(result.data.data);
        setSearchParams({ category: "NonCoffee" });
      })
      .catch((error) => console.error(error));
  };

  const handleForFoods = () => {
    const parameter = "?category=ea71bfcd-f1f1-4976-ae1e-9ff0f2c70d0e";
    const url = `http://localhost:8080/product${parameter}`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data.data);
        setProduct(result.data.data);
        setSearchParams({ category: "Foods" });
      })
      .catch((error) => console.error(error));
  };
  const handleForAllMenu = () => {
    const url = `http://localhost:8080/product/all`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data.data);
        // console.log(result.data.data.length);
        setProduct(result.data.data);
        setSearchParams();
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    //call action getListProduct
    console.log("1. use effect component did mount");
    dispatch(getListProducts());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <section className="product">
        <div className="container">
          <div className="row">
            <LeftPanel/>
            <RightPanel/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default withParams(Product);
