import React from "react";
import { Navigate } from "react-router-dom";

function PrivateElement({
  children,
  allowedRole,
  redirectTo = "/signin",
  isRouteReplaced = true,
  extraData = undefined,
}) {
  // pengecekan status otentikasi
  const { token = null } = JSON.parse(localStorage.getItem("userinfo")) || {}; // jika salah jadiin {}
  const error = localStorage.getItem("tokenExp");
  if (!token) {
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
