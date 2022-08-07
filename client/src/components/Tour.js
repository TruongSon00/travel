import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import { Box, Chip, Paper, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BusinessIcon from "@mui/icons-material/Business";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import { URL_API } from "../constants";

axios.defaults.withCredentials = true;

Tour.propTypes = {};

function Tour(props) {
  const { tour } = props;
  console.log(tour);

  const navigate = useNavigate();
  const location = useLocation();

  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    const getCompany = async () => {
      const res = await axios.get(`${URL_API}/tour/showCompany/${tour.userId}`);
      if (res.status === 200) {
        setCompanyInfo(res.data.company[0]);
      }
    };
    getCompany();
  }, []);

  const handelClickDetail = () => {
    if (location.pathname === "/company" || location.pathname === "/company/") {
      navigate({
        pathname: "/company/edit",
        search: queryString.stringify({ _id: tour._id }),
      });
    } else {
      navigate({
        pathname: "/tour-detail",
        search: queryString.stringify({ _id: tour._id }),
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ minHeight: "50rem", width: "100%" }}>
        <Box sx={{ position: "relative", width: "100%", height: "25rem" }}>
          <img
            src={`${URL_API.slice(0, -4)}/thumbnail/${tour.thumbnail}`}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "0.3rem",
              borderTopRightRadius: "0.3rem",
            }}
          />
          <Box
            sx={{
              color: "#fff",
              fontSize: "1.4rem",
              lineHeight: "1.4rem",
              backgroundColor: "#00b904",
              fontWeight: "bold",
              padding: "0.6rem 0.5rem 0.6rem 1rem",
              borderRadius: "0.3rem",
              position: "absolute",
              top: "1rem",
              right: 0,
            }}
          >
            Khám phá {tour.city}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "4.5rem",
              fontSize: "1.6rem",
              fontWeight: "bold",
              color: "#fff",
              padding: "0 1rem",
              backgroundColor: "#3c669e",
              position: "absolute",
              bottom: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LocationOnIcon sx={{ color: "#e0e0e0", fontSize: "2.3rem" }} />
            <Box component="span" sx={{ lineHeight: "2rem" }}>{`${tour.region}, ${tour.city}`}</Box>
          </Box>
        </Box>
        <Box sx={{ padding: "1rem 2rem" }}>
          <Box
            sx={{ fontSize: "2rem", lineHeight: "2.5rem", cursor: "pointer", height: "5rem" }}
            onClick={handelClickDetail}
          >
            {tour.title}
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "1.6rem",
              color: "#444",
            }}
          >
            <Box>{tour.time}</Box>
            <DirectionsBusIcon fontSize="large" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 4,
              fontSize: "1.6rem",
            }}
          >
            <LocationOnIcon fontSize="large" />
            <Box component="span"> {tour.city}</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
              fontSize: "1.6rem",
            }}
          >
            <EventAvailableIcon fontSize="large" />
            <Box component="span">KH: {tour.dateStart}</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
              fontSize: "1.6rem",
            }}
          >
            <DoneAllIcon fontSize="large" />
            <Box component="span">Đã đặt: {tour.totalOrders ? tour.totalOrders : "0"}</Box>
          </Box>
          {location.pathname === "/tours" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                fontSize: "1.6rem",
              }}
            >
              <BusinessIcon fontSize="large" />
              <Box component="span">
                <Box component="span">Cty: </Box>
                <Box component="span">
                  <Link
                    onClick={() =>
                      navigate({
                        pathname: "/company-introduction",
                        search: queryString.stringify({ _id: companyInfo._id }),
                      })
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    {companyInfo ? companyInfo.username : ""}
                  </Link>
                </Box>
              </Box>
            </Box>
          ) : null}

          <Box sx={{ mt: 2 }}>
            <Chip label="available" color="info" sx={{ fontSize: "1.6rem" }} />
            <Chip label={tour.avaiableTour} color="info" sx={{ fontSize: "1.6rem", ml: 2 }} />
          </Box>
          <Box
            sx={{
              color: "#daa15e",
              fontSize: "2.5rem",
              borderTop: "1px solid #999",
              mt: 5,
              pt: 2,
            }}
          >
            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
              tour.price
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Tour;
