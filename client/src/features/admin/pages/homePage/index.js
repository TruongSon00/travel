import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import UserAccount from "../../components/UserAccount";
import CompanyAccount from "../../components/CompanyAccount";
import VerifyCompany from "../../components/VerifyCompany";
import UnverifyCompany from "../../components/UnverifyCompany";
import CompanyDetail from "../../components/CompanyDetail";

import "./styles.css";
import MenuList from "../../components/MenuList";
import { useCookies } from "react-cookie";

HomePage.propTypes = {};

export const context = createContext();

function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [content, setContent] = useState("");

  const [cookie, , removeCookie] = useCookies();

  const navigate = useNavigate();

  const handelClickLogout = () => {
    removeCookie("token");
    removeCookie("role");
    navigate("/admin/login");
  };

  const props = { selectedIndex, setSelectedIndex, setContent };

  return (
    <context.Provider value={props}>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <Grid container>
          <Grid item xs={2}>
            <MenuList props={props} />
          </Grid>
          <Grid item xs={10}>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid item xs={12}>
                <AppBar sx={{ width: "83.33%" }}>
                  <Toolbar className="admin-home__header">
                    <Box
                      className="admin-home__title"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedIndex("");
                        setContent("");
                      }}
                    >
                      Admin Page
                    </Box>
                    <Box className="admin-home__user">
                      <Box sx={{ fontSize: "2rem" }}>Wellcome Admin</Box>
                      <IconButton
                        color="inherit"
                        size="small"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          fontSize: "2rem",
                        }}
                        onClick={handelClickLogout}
                      >
                        <LogoutIcon sx={{ fontSize: "2.5rem" }} />
                        Logout
                      </IconButton>
                    </Box>
                  </Toolbar>
                </AppBar>
              </Grid>
              <Grid item xs={12}>
                {content === "" ? (
                  <Box className="admin-home__content">
                    <Box>Well come to Admin Page</Box>
                    <SettingsRoundedIcon
                      className="admin-home__content-icon"
                      sx={{ fontSize: "8rem", mt: 3 }}
                    />
                  </Box>
                ) : content === "userAccount" ? (
                  <UserAccount />
                ) : content === "companyAccount" ? (
                  <CompanyAccount setContent={setContent} />
                ) : content === "verifyCompany" ? (
                  <VerifyCompany setContent={setContent} />
                ) : content === "company-info" ? (
                  <CompanyDetail />
                ) : (
                  <UnverifyCompany setContent={setContent} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </context.Provider>
  );
}

export default HomePage;
