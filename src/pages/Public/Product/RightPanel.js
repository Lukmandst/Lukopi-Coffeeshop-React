import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import Pagination from "../../../components/Pagination";
import ProductIcon from "../../../components/ProductIcon/ProductIcon";
import ProductIconAdmin from "../../../components/ProductIcon/ProductIconAdmin";
import {
  getCoffee,
  getFoods,
  getListProducts,
  getNonCoffe,
  // setSortASC,
  // setSortDESC,
} from "../../../Redux/actions/productActions";

function RightPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [sort, setSort] = useState("ASC");
  // eslint-disable-next-line no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { getAllProductsResult, sortState } = useSelector(
    (state) => state.ProductReducer
  );
  const { postUserLoginRole } = useSelector((state) => state.SignInReducer);
  console.log("ini", sortState);
  // Get current product
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getAllProductsResult.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(sort);
  return (
    <>
      <div className="col right-panel">
        <div className="container">
          <div className="category-wrapper d-flex">
            <input
              className="radio_input_category d-none"
              type="radio"
              name="category"
              id="Favourite"
              value="Favourite"
              onClick={(e) => {}}
            />
            <label htmlFor="Favourite" className="radio_label_category category-btn">
              Favourite
            </label>
            <input
              className="radio_input_category d-none"
              type="radio"
              name="category"
              id="All-Menu"
              value="All-Menu"
              onClick={() => {
                dispatch(getListProducts({ sort: sort }));
                setSearchParams();
                Window.scrollTo(0, 0);
              }}
            />
            <label htmlFor="All-Menu" className="radio_label_category category-btn">
              All Menu
            </label>
            <input
              className="radio_input_category d-none"
              type="radio"
              name="category"
              id="Coffee"
              value="Coffee"
              onClick={() => {
               
                dispatch(getCoffee({ sort: sort }));
                setSearchParams({ category: "Coffee" });
                Window.scrollTo(0, 0);
              }}
            />
            <label htmlFor="Coffee" className="radio_label_category category-btn">
              Coffee
            </label>
            <input
              className="radio_input_category d-none"
              type="radio"
              name="category"
              id="Non-Coffee"
              value="NonCoffee"
              onClick={() => {
                
                dispatch(getNonCoffe({ sort: sort }));
                setSearchParams({ category: "NonCoffee" });
                Window.scrollTo(0, 0);
              }}
            />
            <label htmlFor="Non-Coffee" className="radio_label_category category-btn">
              Non Coffee
            </label>
            <input
              className="radio_input_category d-none"
              type="radio"
              name="category"
              id="Foods"
              value="Foods"
              onClick={() => {
              
                dispatch(getFoods({ sort: sort }));
                setSearchParams({ category: "Foods" });
                Window.scrollTo(0, 0);
              }}
            />
            <label htmlFor="Foods" className="radio_label_category category-btn">
              Foods
            </label>
            <input
              className="radio_input_category d-none"
              type="radio"
              name="category"
              id="sort"
              value="Sort"
              onClick={(e) => {}}
            />
            <label htmlFor="sort" className="radio_label_category category-btn">
            <DropdownButton
                  id="dropdown-basic-button"
                  variant="Secondary"
                  title="Sort"
                >
                  <Dropdown.Item
                    onClick={(e) => {
                      e.preventDefault();
                      setSort("ASC");
                      Window.scrollTo(0, 0);
                      // dispatch(setSortASC());
                    }}
                  >
                    A-Z
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      e.preventDefault();
                      setSort("DESC");
                      Window.scrollTo(0, 0);
                      // dispatch(setSortDESC());
                    }}
                  >
                    Z-A
                  </Dropdown.Item>
                </DropdownButton>
            </label>
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
