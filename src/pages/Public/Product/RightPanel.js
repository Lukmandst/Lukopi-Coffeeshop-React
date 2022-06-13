import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import Pagination from "../../../components/Pagination";
import ProductIcon from "../../../components/ProductIcon";
import ProductIconAdmin from "../../../components/ProductIconAdmin";
import {
  getCoffee,
  getFoods,
  getListProducts,
  getNonCoffe,
} from "../../../Redux/actions/productActions";

function RightPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [sort, setSort] = useState("ASC");
  const [setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { getAllProductsResult } = useSelector((state) => state.ProductReducer);
  const { postUserLoginRole } = useSelector((state) => state.SignInReducer);

  // Get current product
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getAllProductsResult.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="col right-panel">
        <div className="container">
          <div className="category-wrapper">
            <ul className="category-menu mx-auto">
              <li className="menu-item-home">
                <div
                  className="active"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(getListProducts(sort));
                    setSearchParams();
                  }}
                >
                  All Menu
                </div>
              </li>
              <li className="menu-item">
                <div
                  className="menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(getCoffee(sort));
                    setSearchParams({ category: "Coffee" });
                  }}
                >
                  Coffee
                </div>
              </li>
              <li className="menu-item">
                <div
                  className="menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(getNonCoffe(sort));
                    setSearchParams({ category: "NonCoffee" });
                  }}
                >
                  Non Coffee
                </div>
              </li>
              <li className="menu-item">
                <div
                  className="menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(getFoods(sort));
                    setSearchParams({ category: "Foods" });
                  }}
                >
                  Foods
                </div>
              </li>
              <li className="menu-item">
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="Secondary"
                  title="Sort"
                >
                  <Dropdown.Item
                    onClick={(e) => {
                      e.preventDefault();
                      setSort("ASC");
                    }}
                  >
                    A-Z
                  </Dropdown.Item>
                  <Dropdown.Item
                    onChange={(e) => {
                      e.preventDefault();
                      setSort("DESC");
                    }}
                  >
                    Z-A
                  </Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
          <div className="show-product">
            <div className=" product-wrapper d-flex">
              {postUserLoginRole === "admin" && currentPosts
                ? currentPosts.map((product) => (
                    <ProductIconAdmin key={product.id} data={product} />
                  ))
                : currentPosts.map((product) => (
                    <ProductIcon key={product.id} data={product} />
                  ))}
            </div>
          </div>
          <p className="notes">
            *the price has been cutted by discount appears
          </p>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={getAllProductsResult.length}
            paginate={paginate}
          />
          <br />
          {postUserLoginRole === "admin" ? (
            <button className="add-product-btn-admin">Add New Product</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default RightPanel;
