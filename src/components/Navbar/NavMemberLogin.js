import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/navmemberlogin.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../Redux/actions/userActions";

function NavMemberLogin() {
  // const [user, setUser] = useState([]);
  // const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  //dispatch
  const { getUserResult } = useSelector((state) => state.UserReducer);
  const { postUserLoginToken } = useSelector((state) => state.SignInReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(postUserLoginToken));
  }, [dispatch]);

  return (
    <>
      <form className="searchbar" action="">
        <i className="fa fa-search"></i>
        <input type="search" required placeholder="Search" />
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
