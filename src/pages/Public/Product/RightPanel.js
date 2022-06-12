import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../components/Pagination";
import ProductIcon from "../../../components/ProductIcon";
import ProductIconAdmin from "../../../components/ProductIconAdmin";

function RightPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  const { getAllProductsResult, getAllProductsLoading, getAllProductsError } =
    useSelector((state) => state.ProductReducer);
  
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
                  to="/products"
                  onClick={() => {
                    // setIsAllMenu(true);
                  }}
                >
                  All Menu
                </div>
              </li>
              <li className="menu-item">
                <div
                  // to="?category=07e88ba9-1a54-46ab-bf2c-3dc8831090a4"
                  className="menu-link"
                  onClick={(e) => {
                    // setIsCoffee(true);
                  }}
                >
                  Coffee
                </div>
              </li>
              <li className="menu-item">
                <div
                  to="?category=30b95dde-a820-41dd-b474-902026e3e755"
                  className="menu-link"
                  onClick={() => {
                    // setIsNonCoffee(true);
                  }}
                >
                  Non Coffee
                </div>
              </li>
              <li className="menu-item">
                <div
                  to="?category=ea71bfcd-f1f1-4976-ae1e-9ff0f2c70d0e"
                  className="menu-link"
                  onClick={() => {
                    // setIsFoods(true);
                  }}
                >
                  Foods
                </div>
              </li>
              <li className="menu-item">
                <div to="#" className="menu-link">
                  Add-on
                </div>
              </li>
            </ul>
          </div>
          <div className="show-product">
            <div className=" product-wrapper d-flex">
              {Array.isArray(currentPosts) ? (
                currentPosts.map((product) => (
                  <ProductIcon key={product.id} data={product} />
                ))
              ) : getAllProductsLoading ? (
                <p>Loading....</p>
              ) : (
                <p>
                  {getAllProductsError
                    ? getAllProductsError
                    : "Product Not Found :("}
                </p>
              )}
              {Array.isArray(currentPosts) ? (
                currentPosts.map((product) => (
                  <ProductIconAdmin key={product.id} data={product} />
                ))
              ) : getAllProductsLoading ? (
                <p>Loading....</p>
              ) : (
                <p>
                  {getAllProductsError
                    ? getAllProductsError
                    : "Product Not Found :("}
                </p>
              )}
            </div>
          </div>
          {/* <p>{searchParams.get("category")}</p> */}
          <p className="notes">
            *the price has been cutted by discount appears
          </p>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={getAllProductsResult.length}
            paginate={paginate}
          />
          <br/>
          <button className="add-product-btn-admin">Add New Product</button>
        </div>
      </div>
    </>
  );
}

export default RightPanel;
