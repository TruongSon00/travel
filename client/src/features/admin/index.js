import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/login";
import ProtectedRoutAdmin from "../../protectedRout/ProtectedRoutAdmin";

index.propTypes = {};

function index(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutAdmin redirectTo="/admin/login">
            <HomePage />
          </ProtectedRoutAdmin>
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default index;
