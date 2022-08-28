import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Box, Container } from "@mui/material";
import { useCookies } from "react-cookie";

import logo from "../../assets/logo.png";
import Menu from "./Menu";
import { URL_API } from "../../constants";
import axios from "axios";
axios.defaults.withCredentials = true;

// import "./styles.css";

function Header(props) {
  const [cookie, setCookie] = useCookies("token");
  const [role, setRole] = useCookies("role");
  const [companyInfo, setCompanyInfo] = useState(null);
  useEffect(() => {
    const getInfor = async () => {
      try {
        const res = await axios.get(`${URL_API}/company`);
        if (res.data.role === 2) {
          setCompanyInfo(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getInfor();
  }, [cookie.token]);

  const navigate = useNavigate();

  const handelClick = (title) => {
    if (title === "create") {
      navigate("/company/create");
    } else if (title === "nature") {
      navigate("/nature");
    } else if (title === "transactionHistory") {
      navigate("/company/transaction-history");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#252525", position: "fixed", width: "100vw", zIndex: "99" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ width: "200px" }} as={Link} to="/company">
          <img src={logo} width="100%" />
        </Box>
        <div className="header__list">
          <div className="header__link" onClick={() => handelClick("create")}>
            Create Tour
          </div>
          <div className="header__link" onClick={() => handelClick("dashboard")}>
            Dashboard
          </div>
          <div className="header__link" onClick={() => handelClick("transactionHistory")}>
            Transaction History
          </div>
        </div>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box sx={{ color: "#daa15e", fontSize: "1.8rem", fontWeight: "bold" }}>
            {!!companyInfo ? companyInfo.username : null}
          </Box>
          <Menu />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
