import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateElementAfterLoginAdmin({
  children,
  allowedRole,
  redirectTo = "/",
  isRouteReplaced = true,
  extraData = undefined,
}) {
  // pengecekan status otentikasi
  const { postUserLoginRole } = useSelector((state) => state.SignInReducer);

  if (postUserLoginRole !== "admin") {
    return (
      <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
    );
  }

  //cek otorisasi role jugga bisa ditambahin
  return children;
}

export default PrivateElementAfterLoginAdmin;
