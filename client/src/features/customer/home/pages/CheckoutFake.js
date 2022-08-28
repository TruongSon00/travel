import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useSnackbar } from "notistack";
import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Order from "../components/checkOut/Order";
import { URL_API } from "../../../../constants";

axios.defaults.withCredentials = true;

CheckoutFake.propTypes = {};

function CheckoutFake(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const params = useRef(queryString.parse(location.search));

  const timeOff = useRef("");

  const [user, setUser] = useState({});
  const [tour, setTour] = useState({});
  const [orderForm, setOrderForm] = useState({
    tourId: "",
    numberTicket: params.current._number,
    phoneNumber: "",
    address: "Hải Phòng",
    timeStart: params.current._dateStart,
    timeOut: "",
  });

  useEffect(() => {
    const getDateOut = () => {
      const day = parseInt(params.current._dateStart.substring(0, 2));
      if (tour._id) {
        const dayTime = parseInt(tour.time.charAt(0));
        const dayResult = day + dayTime;
        if (dayResult < 10) {
          timeOff.current = `0${day + dayTime}${params.current._dateStart.slice(2)}`;
          setOrderForm((prev) => ({ ...prev, timeOut: timeOff.current }));
        } else {
          timeOff.current = `${day + dayTime}${params.current._dateStart.slice(2)}`;
          setOrderForm((prev) => ({ ...prev, timeOut: timeOff.current }));
        }
      }
    };

    getDateOut();
  }, [tour._id]);

  const confirmDtas = [
    {
      field: "Tên khách hàng",
      data: user ? user.username : "",
      name: "username",
    },
    {
      field: "Email",
      data: user ? user.email : "",
      name: "email",
    },
    {
      field: "Số điện thoại",
      data: user ? user.phoneNumber : "",
      name: "phoneNumber",
    },
    {
      field: "Địa chỉ",
      data: "Hải Phòng",
      name: "address",
    },
    {
      field: "Tour",
      data: tour ? tour.title : "",
      disabled: true,
      name: "title",
    },
    {
      field: "ngày xuất phát tour",
      data: params.current._dateStart,
      disabled: true,
      name: "timeStart",
    },
    {
      field: "ngày kết thúc tour (dự tính)",
      data: timeOff.current,
      disabled: true,
      name: "timeOut",
    },
    {
      field: "Số lượng người",
      data: `${params.current._number} người`,
      disabled: true,
      name: "numberTicket",
    },
    {
      field: "Giá tiền trên 1 người",
      data: tour
        ? new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(tour.price)
        : "",
      disabled: true,
      name: "price",
    },
    {
      field: "Tổng tiền",
      data: tour
        ? new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
            params.current._number * tour.price
          )
        : "",
      disabled: true,
      name: "total",
    },
  ];

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${URL_API}/show`);
      if (res.status === 200) {
        setUser(res.data.user);
        setOrderForm((prev) => ({ ...prev, phoneNumber: res.data.user.phoneNumber }));
      }
    };

    const getTour = async () => {
      const res = await axios.get(`${URL_API}/tour/show/${params.current._id}`);
      if (res.status === 200) {
        setTour(res.data.tour[0]);
        setOrderForm((prev) => ({ ...prev, tourId: res.data.tour[0]._id }));
      }
    };

    getUser();
    getTour();
  }, []);

  const handleOnChange = (e, data) => {
    setOrderForm((prev) => ({ ...prev, data: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${URL_API}/booking/add`, orderForm);
      if (res.status === 200) {
        enqueueSnackbar("Your invoice has been confirmed !", { variant: "success" });
        navigate(-1);
      }
    } catch (error) {
      enqueueSnackbar(error.response.data.Message, { variant: "error" });
    }
  };

  return (
    <div>
      <Header />

      <Container sx={{ pt: 10, mb: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Paper sx={{ padding: "2rem", mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h1 style={{ textAlign: "center" }}>Thanh Toán</h1>
                </Grid>

                {confirmDtas.map((data) => {
                  return (
                    <Grid item xs={12} key={data.field}>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
                            <span style={{ width: "21rem" }}>{data.field}</span>
                            <span style={{ flex: 1 }}>:</span>
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                          {data.disabled ? (
                            data.data
                          ) : (
                            <TextField
                              fullWidth
                              value={data.data}
                              onChange={(e) => handleOnChange(e, data.name)}
                            />
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    sx={{ width: "25rem", height: "4rem", fontSize: "1.4rem" }}
                    onClick={handleSubmit}
                  >
                    xác nhận hóa đơn
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Order tour={tour} params={params} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}

export default CheckoutFake;
