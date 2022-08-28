import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

import HomePage from "../features/admin/pages/homePage";

function ProtectedRoutCompany(props) {
  const { redirectTo } = props;

  const [cookie, setCookie] = useCookies("role");

  return (
    <>
      {cookie.role == 3 ? (
        <>
          <HomePage />
        </>
      ) : (
        <Navigate to={redirectTo} />
      )}
    </>
  );
}

export default ProtectedRoutCompany;
