import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import { Button, Grid, TextField } from "@mui/material";
import { RiKey2Fill } from "react-icons/ri";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { URL_API } from "../../../../../constants";
import LocationField from "./LocationField";

import "./styles.css";

axios.defaults.withCredentials = true;

function Register(props) {
  const navigate = useNavigate();

  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const locationsRef = useRef([]);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile("person.png");
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const handelRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    formData.append("avt", selectedFile);
    formData.append("address", [1, 2, 3]);
    const data = { username, email, phoneNumber, password, avt: selectedFile, address: JSON.stringify(locationsRef.current) }
    console.log(locationsRef.current);
    try {
      const res = await axios.post(`${URL_API}/company/register`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        enqueueSnackbar(
          "register successfully, Please wait for the admin to verify the information ",
          { variant: "success" }
        );
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.Message, { variant: "error" });
    }
  };

  return (
    <div className="company-register__body">
      <div className="company-register__container">
        <div>
          <RiKey2Fill className="company-register__key" />
        </div>
        <div className="company-register__title">COMPANY REGISTER</div>
        <form action="" onSubmit={handelRegister} className="company-register__form">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="company-register__preview-avt">
                <img
                  src={
                    preview
                      ? preview
                      : "https://vietnam.travel/themes/custom/vietnamtourism/images/logo.jpg"
                  }
                  alt=""
                />
              </div>
              <label className="company-register__choose-file">
                <AddPhotoAlternateIcon sx={{ fontSize: "3.5rem", color: "#4a4ac1" }} />
                <div>Choose a photo as a avatar of company</div>
                <input type="file" onChange={onSelectFile} />
              </label>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    name="ussername"
                    label="Username"
                    variant="standard"
                    color="info"
                    focused
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
                    inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
                    sx={{ "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="phoneNumber"
                    label="Phone number"
                    variant="standard"
                    color="info"
                    focused
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
                    inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
                    sx={{ "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    variant="standard"
                    color="info"
                    focused
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
                    inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
                    sx={{ "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="password"
                    label="Password"
                    variant="standard"
                    color="info"
                    focused
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
                    inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
                    sx={{ "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="confirmPassword"
                    label="Confirm password"
                    variant="standard"
                    color="info"
                    focused
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
                    inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
                    sx={{ "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
                  />
                </Grid>

                <LocationField locationsRef={locationsRef} />

                <Grid item xs={8} sx={{ margin: "0 auto" }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 1, height: "3.5rem", fontSize: "1.6rem", fontWeight: "bold" }}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Register;
