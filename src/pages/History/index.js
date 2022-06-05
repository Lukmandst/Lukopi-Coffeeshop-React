import React, {useState,useEffect } from "react";
import "./history.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HistoryIcon from "../../components/HistoryIcon";
import axios from "axios";
import Pagination from "../../components/Pagination";


 function History() {
  const [historyData, setHistoryData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  // Get current history
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = historyData.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    const url = "http://localhost:8080/transaction/history/";
    const axiosGet = async () => {
      const result = await axios.get(url, config);
      setHistoryData(result.data.data);
    };
    axiosGet().catch(console.error);
  }, []);

  return (
    <div>
        <Navbar login={true}/>
        <section className="container-fluid history-wrapper">
          <div className="row">
            <div className="col history-col">
              <header className="history-header">
                <h1 className="history-title">
                  Let's see what you have bought!
                </h1>
                <p className="history-subtitle">Long press to delete item</p>
              </header>
              <section className="history-section d-flex">
                {Array.isArray(currentPosts) ? (
                 currentPosts.map((result) => (
                    <HistoryIcon key={result.id} data={result} />
                  ))
                ) : (
                  <></>
                )}
              </section>
              <br/>
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
  )
}


export default History;
