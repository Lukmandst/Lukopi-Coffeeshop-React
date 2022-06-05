import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/navmemberlogin.css";
function NavMemberLogin() {
  const [user, setUser] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      const url = "http://localhost:8080/user/info/";
      const result = await axios.get(url, config);
      setUser(result.data.data[0]);
    };

    fetchData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="searchbar">
        <input
          className="search_input"
          type="text"
          name=""
          placeholder="Search..."
        />
        <Link to="#" className="search_icon">
          <i className="fas fa-search"></i>
        </Link>
      </div>
      <Link to="#">
        <button className="chat-btn"></button>
      </Link>
      <Link to="/profile">
        <button className="profile-btn">
          <img src={`http://localhost:8080${user.picture}`} alt="img" />
        </button>
      </Link>
    </>
  );
}

export default NavMemberLogin;
