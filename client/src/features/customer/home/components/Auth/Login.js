import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useCookies } from "react-cookie";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { URL_API } from "../../../../../constants";

Login.propTypes = {};

function Login(props) {
  const { setOpen } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [cookie, setCookie, removeCookie] = useCookies();
  // const [role, setRole, removeRole] = useCookies("role");

  const handleLogin = async (e) => {
    e.preventDefault();
    removeCookie("token");
    removeCookie("role");

    try {
      const res = await axios.post(`${URL_API}/login`, loginForm);
      if (res.status === 200) {
        var expires = new Date();
        expires.setTime(expires.getTime() + 31536000000); //1 year

        setCookie("token", res.data.token, {
          expires,
        });
        // setCookie("token", res.data.token);
        setCookie("role", 1, {
          expires,
        });
        setOpen(false);
      }
    } catch (error) {
      enqueueSnackbar(error.response.data.Message, { variant: "error" });
    }
  };

  return (
    <Box>
      <Avatar sx={{ margin: "2rem auto 1rem", backgroundColor: "#9c27b0" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h2" sx={{ textAlign: "center", color: "#9c27b0", mb: 2 }}>
        Sign in
      </Typography>

      <form onSubmit={handleLogin}>
        <TextField
          name="email"
          fullWidth
          label="Email"
          InputProps={{ style: { fontSize: "1.6rem" } }}
          InputLabelProps={{ style: { fontSize: "1.6rem" } }}
          onChange={(e) => {
            setLoginForm((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          name="password"
          fullWidth
          label="Password"
          InputProps={{ style: { fontSize: "1.6rem" } }}
          InputLabelProps={{ style: { fontSize: "1.6rem" } }}
          onChange={(e) => {
            setLoginForm((prev) => ({ ...prev, password: e.target.value }));
          }}
          sx={{ mt: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, fontSize: "1.8rem", fontWeight: "bold" }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

export default Login;
