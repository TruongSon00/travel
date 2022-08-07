import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/loginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HistoryPage from "./pages/HistoryPage";
import ProtectedRoutCompany from "../../protectedRout/ProtectedRoutCompany";

index.propTypes = {};

function index(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutCompany redirectTo="/company/login">
            <HomePage />
          </ProtectedRoutCompany>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/transaction-history" element={<HistoryPage />} />
    </Routes>
  );
}

export default index;
