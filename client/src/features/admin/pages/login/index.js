import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

import { Box, Button, TextField } from "@mui/material";
import { RiKey2Fill } from "react-icons/ri";

import { URL_API } from "../../../../constants";

import "./styles.css";

axios.defaults.withCredentials = true;

LoginPage.propTypes = {};

function LoginPage(props) {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [cookie, setCookie, removeCookie] = useCookies();
  // const [role, setRole, removeRole] = useCookies("role");

  const handleOnChange = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelClickLogin = async () => {
    // navigate("/vntravel/admin");
    removeCookie("token");
    removeCookie("role");
    try {
      const res = await axios.post(`${URL_API}/admin/login`, loginForm);
      if (res.status === 200) {
        var expires = new Date();
        expires.setTime(expires.getTime() + 31536000000); //1 year

        setCookie("token", res.data.token, {
          expires,
        });
        setCookie("role", 3, {
          expires,
        });
        navigate("/admin");
      }
    } catch (error) {
      enqueueSnackbar(error.response.data.Message, { variant: "error" });
    }
  };

  return (
    <Box className="admin-login__body">
      <Box className="admin-login__container">
        <Box>
          <RiKey2Fill className="admin-login__key" />
        </Box>
        <Box className="admin-login__title">ADMIN PANEL</Box>
        <Box className="admin-login__form">
          <TextField
            name="email"
            label="Email"
            variant="standard"
            color="info"
            focused
            fullWidth
            InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
            inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
            sx={{ mt: 5, "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
            onChange={handleOnChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="standard"
            color="info"
            focused
            fullWidth
            InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
            inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
            sx={{ mt: 6, "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
            onChange={handleOnChange}
          />
          <Box sx={{ mt: 7, textAlign: "right" }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#0db8de",
                width: "10rem",
                height: "4rem",
                borderColor: "#0db8de",
                "&:hover": { backgroundColor: "#0db8de", color: "#fff" },
              }}
              onClick={handelClickLogin}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
