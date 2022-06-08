import React from "react";
import { Navigate } from "react-router-dom";

function PrivateElementAfterLogin({
  children,
  allowedRole,
  redirectTo = "/",
  isRouteReplaced = true,
  extraData = undefined,
}) {
  // pengecekan status otentikasi
  const { token = null } = JSON.parse(localStorage.getItem("userinfo")) || {}; // jika salah jadiin {}
//   const error = localStorage.getItem("tokenExp");
  if (token) {
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
