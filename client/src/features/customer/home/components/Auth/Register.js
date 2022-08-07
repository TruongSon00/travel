import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useSnackbar } from "notistack";

import { URL_API } from "../../../../../constants";

axios.defaults.withCredentials = true;

Register.propTypes = {};

function Register(props) {
  const { setMode } = props;

  const { enqueueSnackbar } = useSnackbar();

  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [password, setPassword] = useState();
  const [confirmPw, setConfirmPw] = useState();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handelregister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${URL_API}/register`, registerForm);
      if (res.status === 200) {
        setMode("login");
        enqueueSnackbar("you have register new account successfully !", { variant: "success" });
      }
      // console.log(res.response);
    } catch (error) {
      if (error.response.data.Message === "Email đã tồn tại") {
        enqueueSnackbar(error.response.data.Message, { variant: "error" });
      }
    }

    // onSubmit(form);
  };

  return (
    <Box>
      {/* {isSubmitting && <LinearProgress />} */}

      <Avatar sx={{ margin: "2rem auto 1rem", backgroundColor: "#9c27b0" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h2" sx={{ textAlign: "center", color: "#9c27b0", mb: 2 }}>
        Sign up
      </Typography>

      <form onSubmit={handelregister}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              // value={username}
              fullWidth
              label="username"
              InputProps={{ style: { fontSize: "1.6rem" } }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              onChange={(e) => setRegisterForm((prev) => ({ ...prev, username: e.target.value }))}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              // value={phoneNumber}
              fullWidth
              label="Phone number"
              InputProps={{ style: { fontSize: "1.6rem" } }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              onChange={(e) =>
                setRegisterForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              // value={email}
              fullWidth
              label="Email"
              InputProps={{ style: { fontSize: "1.6rem" } }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              sx={{ mt: 2 }}
              onChange={(e) => setRegisterForm((prev) => ({ ...prev, email: e.target.value }))}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              // value={password}
              fullWidth
              label="Password"
              InputProps={{ style: { fontSize: "1.6rem" } }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              sx={{ mt: 2 }}
              onChange={(e) => setRegisterForm((prev) => ({ ...prev, password: e.target.value }))}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={confirmPw}
              fullWidth
              label="Confirm password"
              InputProps={{ style: { fontSize: "1.6rem" } }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              sx={{ mt: 2 }}
              onChange={(e) => setConfirmPw(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, fontSize: "1.8rem", fontWeight: "bold" }}
          type="submit"
        >
          Register
        </Button>
      </form>
    </Box>
  );
}

export default Register;
