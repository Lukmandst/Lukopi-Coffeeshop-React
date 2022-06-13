import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Footer from "../../../components/Footer";
import HistoryIcon from "../../../components/HistoryIcon";
import Navbar from "../../../components/Navbar/Navbar";
import Pagination from "../../../components/Pagination";

import "bootstrap/dist/css/bootstrap.min.css";
import "./history.css";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  // Get current history
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = historyData.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteHandler = () => {
    const config = {
      headers: { Authorization: `Bearer ${postUserLoginToken}` },
    };
    axios
      .delete(`${process.env.REACT_APP_HOST_API}/transaction`, config)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      setHistoryData([])
  };

  const { postUserLoginToken } = useSelector((state) => state.SignInReducer);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${postUserLoginToken}` },
    };
    const url = `${process.env.REACT_APP_HOST_API}/transaction/history/`;
    const axiosGet = async () => {
      const result = await axios.get(url, config);
      console.log(result.data.data);
      setHistoryData(result.data.data);
    };
    axiosGet().catch(console.error);
  }, [postUserLoginToken]);

  return (
    <div>
      <Navbar />
      <section className="container-fluid history-wrapper">
        <div className="row">
          <div className="col history-col">
            <header className="history-header">
              <h1 className="history-title">Let's see what you have bought!</h1>
              <p className="history-subtitle">Long press to delete item</p>
              <div className="clear-history" onClick={deleteHandler}>
                Clear History
              </div>
            </header>
            <section className="history-section d-flex">
              {Array.isArray(currentPosts) ? (
                currentPosts.map((result) => (
                  <HistoryIcon
                    key={result.id}
                    date={result.date}
                    data={result}
                  />
                ))
              ) : (
                <></>
              )}
              {currentPosts.length === 0 ? (
                <div style={{color: '#fff'}}>You haven't purchase any product yet :(</div>
              ) : (
                <></>
              )}
            </section>
            <br />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={historyData.length}
              paginate={paginate}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default History;
