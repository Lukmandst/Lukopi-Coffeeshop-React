import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navmember.css";

function NavMember() {
  return (
    <>
      <Link to="/signin">
        <button className="button-login">Sign In</button>
      </Link>
      <Link to="/signup">
        <button className="button-signup"> Sign Up</button>
      </Link>
    </>
  );
}

export default NavMember;
