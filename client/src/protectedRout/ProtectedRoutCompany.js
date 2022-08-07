import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

import HomePage from "../features/company/pages/HomePage";

function ProtectedRoutCompany(props) {
  const { redirectTo } = props;

  const [cookie, setCookie] = useCookies("role");
  // const [role, setRole, removeRole] = useCookies("role");
  // console.log(role.role);

  return (
    <>
      {cookie.role == 2 ? (
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
