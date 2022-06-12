import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateElementAfterLogin({
  children,
  allowedRole,
  redirectTo = "/",
  isRouteReplaced = true,
  extraData = undefined,
}) {
  // pengecekan status otentikasi
  const { postUserLoginToken } = useSelector((state) => state.SignInReducer);

  if (postUserLoginToken) {
    return (
      <>
        <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
      </>
    );
  }

  //cek otorisasi role jugga bisa ditambahin
  return children;
}

export default PrivateElementAfterLogin;
