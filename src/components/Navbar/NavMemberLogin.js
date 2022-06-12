import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../Redux/actions/userActions";
import { findFoods } from "../../Redux/actions/productActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/navmemberlogin.css";

function NavMemberLogin() {
  const [value, setValue] = useState("");
  const [setSearchParams] = useSearchParams();

  //dispatch
  const { getUserResult } = useSelector((state) => state.UserReducer);
  const { postUserLoginToken } = useSelector((state) => state.SignInReducer);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(findFoods(value));
    setSearchParams({ name: value });
  };

  useEffect(() => {
    dispatch(getUserInfo(postUserLoginToken));
  }, [dispatch, postUserLoginToken]);

  return (
    <>
      <form className="searchbar" onSubmit={handleSearch}>
        <i className="fa fa-search"></i>
        <input
          type="search"
          required
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <Link to="#">
        <button className="chat-btn"></button>
      </Link>
      <Link to="/profile">
        <button className="profile-btn">
          <img
            src={`http://localhost:8080${getUserResult.picture}`}
            alt="img"
          />
        </button>
      </Link>
    </>
  );
}

export default NavMemberLogin;
