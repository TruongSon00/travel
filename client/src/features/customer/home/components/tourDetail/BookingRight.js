import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import axios from "axios";

import { Box, Button, FormControl, MenuItem, Paper, TextField, Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Select from "@mui/material/Select";

import { URL_API } from "../../../../../constants";

axios.defaults.withCredentials = true;

BookingRight.propTypes = {};

function BookingRight(props) {
  const { tour } = props;

  const navigate = useNavigate();

  const [cookie, setCookie] = useCookies();

  const [dateValue, setDateValue] = useState(new Date()); //2014-08-18T21:11:54
  const [customerNumber, setCustomerNumber] = useState("1");

  const handleChangeDate = (newValue) => {
    setDateValue(newValue);
  };

  const handelClick = async () => {
    const dayVavlue = dateValue.getDate() < 10 ? `0${dateValue.getDate()}` : dateValue.getDate();
    const monthVavlue = dateValue.getMonth() + 1;
    const yearVavlue = dateValue.getFullYear();
    const dateStart = `${dayVavlue} - ${monthVavlue} - ${yearVavlue}`;
    if (cookie.role == 1 && cookie.token) {
      navigate({
        pathname: "/check-out-1",
        search: queryString.stringify({
          _id: tour._id,
          _number: customerNumber,
          _dateStart: dateStart,
        }),
      });
    } else {
      window.alert("Please login before book tour!");
    }
  };

  return (
    <Box>
      <Paper sx={{ padding: "2.5rem 1.5rem", backgroundColor: "#011e41" }}>
        <Box
          sx={{
            fontSize: "1.6rem",
            lineHeight: "1.6rem",
            color: "#ffc600",
            textDecoration: "line-through",
          }}
        >
          2,990,000 VND
        </Box>
        <Box sx={{ color: "#ffc600", fontSize: "3rem", lineHeight: "2", fontWeight: "bold" }}>
          {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
            tour.price
          )}
        </Box>
        <form>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
            <Box sx={{ flex: 1.5, fontSize: "1.6rem", color: "#fff" }}>khởi hành</Box>
            <Box sx={{ flex: 3 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={dateValue}
                    onChange={handleChangeDate}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        {...params}
                        sx={{
                          borderRadius: "0.5rem",
                          backgroundColor: "#fff",
                          input: { fontSize: "1.4rem" },
                          svg: { fontSize: "2rem" },
                        }}
                      />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, margin: "1rem 0 2rem" }}>
            <Box sx={{ flex: 1.5, fontSize: "1.6rem", color: "#fff" }}>Số khách</Box>
            <Box sx={{ flex: 3 }}>
              <FormControl fullWidth>
                <Select
                  value={customerNumber}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={(e) => {
                    setCustomerNumber(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    fontSize: "1.6rem",
                    label: { color: "#333", fontWeight: "bold" },
                  }}
                >
                  <MenuItem value={1}>1 người</MenuItem>
                  <MenuItem value={2}>2 người</MenuItem>
                  <MenuItem value={3}>3 người</MenuItem>
                  <MenuItem value={4}>4 người</MenuItem>
                  <MenuItem value={5}>5 người</MenuItem>
                  <MenuItem value={6}>6 người</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#ffc600",
              color: "black",
              fontSize: "1.6rem",
              "&:hover": { backgroundColor: "#f3c113" },
            }}
            onClick={handelClick}
          >
            Đặt Tour
          </Button>
        </form>
      </Paper>
      <Paper sx={{ mt: 2, borderRadius: "0.5rem" }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#0066d9",
            color: "#fff",
            fontSize: "2rem",
            lineHeight: "3rem",
            textAlign: "center",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        >
          tổng đài tư vấn
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: "1.6rem", lineHeight: "1.6rem", fontWeight: "bold" }}>
            Mọi thắc mắc của quý khách
          </Box>
          <Box sx={{ fontSize: "1.4rem", lineHeight: "1.4", color: "#555", mt: 2 }}>
            vui lòng gọi:
            <Box
              component="span"
              sx={{ fontSize: "1.8rem", lineHeight: "1.8rem", color: "#0066d9" }}
            >
              1900 3398
            </Box>
          </Box>
          <Box sx={{ fontSize: "1.4rem", lineHeight: "1.4", color: "#555", mt: 2 }}>
            Chúng tôi hỗ trợ 24/7
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default BookingRight;
