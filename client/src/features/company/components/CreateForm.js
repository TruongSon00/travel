import React, { useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useSnackbar } from "notistack";

import Program from "./createComponents/Program";
import Address from "./createComponents/Address";
import Price from "./createComponents/Price";
import { URL_API } from "../../../constants";

axios.defaults.withCredentials = true;

function CreateForm(props) {
  const { onSelectFile, selectedFile } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [title, setTitle] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [totalTour, setTotalTour] = useState("");
  const [transport, setTransport] = useState("");
  const [region, setRegion] = useState();
  const [city, setCity] = useState();
  const [price, setPrice] = useState("");
  const [saleOff, setSaleOff] = useState("");
  const [time, setTime] = useState("");

  const [daytime, setDaytime] = useState("");
  const [night, setNight] = useState("");
  const [nights, setNights] = useState([]);

  const [boolean, setBoolean] = useState(false);

  const programs = useRef([]);

  const navigate = useNavigate();

  const handleChangeDaytime = (e) => {
    const check = e.target.value;
    if (/\D/.test(check) || check > 7) {
      window.alert("Daytime must be a number and less than 7!");
      setBoolean(false);
      setDaytime(1);
      setNights([0, 1]);
    } else if (/\D/.test(check) || check < 1) {
      setBoolean(false);
      setDaytime("");
      setNights([]);
    } else {
      setDaytime(check);
      const nightValue = [check - 1, check];
      setNights(nightValue);
    }
  };

  const handleChangeNight = (e) => {
    setNight(e.target.value);
    setBoolean(true);
    setTime(`${daytime} ngày ${e.target.value} đêm`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("code", "GCH190102");
    formData.append("service", [1, 2, 4]);
    formData.append("introduction", [1, 2, 4]);
    formData.append("avaiableTour", totalTour);
    formData.append("thumbnail", selectedFile);
    formData.append("thumbnail", selectedFile);
    formData.append("thumbnail", selectedFile);
    formData.append("title", title);
    formData.append("dateStart", dateStart);
    formData.append("totalTour", totalTour);
    formData.append("transport", transport);
    formData.append("city", city);
    formData.append("region", region);
    formData.append("time", time);
    formData.append("price", price);
    formData.append("saleOff", saleOff);
    formData.append("program", JSON.stringify(programs.current));
    try {
      const res = await axios.post(`${URL_API}/company/tour/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        enqueueSnackbar("update tour successfully !", { variant: "success" });
        navigate("/company");
      }
    } catch (error) {
      enqueueSnackbar(error.response.data.Message, { variant: "error" });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={title}
            label="Title"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              "& label": {
                fontSize: "1.4rem",
                paddingRight: 1,
                backgroundColor: "#f0f2f5",
              },
            }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            label="Introduction"
            variant="outlined"
            fullWidth
            rows={3}
            multiline
            sx={{
              mb: 2,
              "& label": {
                fontSize: "1.4rem",
                paddingRight: 1,
                backgroundColor: "#f0f2f5",
              },
            }}
            onChange={(e) => {
              setTourForm((prev) => ({ ...prev, introduction: e.target.value }));
            }}
          />
        </Grid> */}

        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              height: "4.8rem",
              border: "1px solid #b7b4b4",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label for="inputTag" style={{ cursor: "pointer" }}>
              <AddPhotoAlternateIcon sx={{ fontSize: "3.5rem", color: "#4a4ac1" }} />
              <input
                name="thumbnail"
                id="inputTag"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  onSelectFile(e);
                }}
              />
              <br />
              {/* <span style={{ fontSize: "1.1rem" }}>{image}</span> */}
            </label>
          </Box>
        </Grid>

        <Address region={region} setRegion={setRegion} city={city} setCity={setCity} />

        <Grid item xs={4}>
          <FormControl
            fullWidth
            sx={{ "& label": { fontSize: "1.4rem", paddingRight: 1, backgroundColor: "#f0f2f5" } }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">departure time</InputLabel>
            <Select
              value={dateStart}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="departure time"
              onChange={(e) => {
                setDateStart(e.target.value);
              }}
            >
              <MenuItem value={"Thứ hai"}>Thứ hai</MenuItem>
              <MenuItem value={"Thứ ba"}>Thứ ba</MenuItem>
              <MenuItem value={"Thứ tư"}>Thứ tư</MenuItem>
              <MenuItem value={"Thứ năm"}>Thứ năm</MenuItem>
              <MenuItem value={"Thứ sáu"}>Thứ sáu</MenuItem>
              <MenuItem value={"Thứ bảy"}>Thứ bảy</MenuItem>
              <MenuItem value={"Chủ nhật"}>Chủ nhật</MenuItem>
              <MenuItem value={"Các ngày trong tuần"}>Các ngày trong tuần</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Daytime"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              "& label": { fontSize: "1.4rem", paddingRight: 1, backgroundColor: "#f0f2f5" },
            }}
            value={daytime}
            onChange={handleChangeDaytime}
          />
        </Grid>

        <Grid item xs={4}>
          <FormControl
            fullWidth
            sx={{ "& label": { fontSize: "1.4rem", paddingRight: 1, backgroundColor: "#f0f2f5" } }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">Night</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City"
              value={night}
              onChange={handleChangeNight}
            >
              {nights.length > 0 ? (
                nights.map((data) => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem disabled={true}></MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>

        <Program boolean={boolean} daytime={daytime} programs={programs} />

        <Grid item xs={6}>
          <TextField
            value={totalTour}
            label="Number of tours"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              "& label": { fontSize: "1.4rem", paddingRight: 1, backgroundColor: "#f0f2f5" },
            }}
            onChange={(e) => setTotalTour(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl
            fullWidth
            sx={{ "& label": { fontSize: "1.4rem", paddingRight: 1, backgroundColor: "#f0f2f5" } }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">Transportation</InputLabel>
            <Select
              value={transport}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Transportation"
              onChange={(e) => setTransport(e.target.value)}
            >
              <MenuItem value={"5-seat car"}>5-seat car</MenuItem>
              <MenuItem value={"9-seat car"}>9-seat car</MenuItem>
              <MenuItem value={"16-seat car"}>16-seat car</MenuItem>
              <MenuItem value={"24-seat car"}>24-seat car</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Price price={price} setPrice={setPrice} saleOff={saleOff} setSaleOff={setSaleOff} />
      </Grid>
      <Button fullWidth variant="contained" size="large" sx={{ mt: 2 }} type="submit">
        create
      </Button>
    </form>
  );
}

export default CreateForm;
