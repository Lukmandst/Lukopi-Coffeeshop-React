import React from "react";
import { Navigate } from "react-router-dom";
import{useSelector} from 'react-redux'

function PrivateElement({
  children,
  allowedRole,
  redirectTo = "/signin",
  isRouteReplaced = true,
  extraData = undefined,
}) {
  // pengecekan status otentikasi
  const error = localStorage.getItem("tokenExp");
  const { postUserLoginToken } = useSelector((state) => state.SignInReducer);

  if (!postUserLoginToken) {
    return (
      <>
        <p>{error}</p>
        <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
      </>
    );
  }

  //cek otorisasi role jugga bisa ditambahin
  return children;
}

export default PrivateElement;
