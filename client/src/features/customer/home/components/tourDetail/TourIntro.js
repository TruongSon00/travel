import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DoneIcon from "@mui/icons-material/Done";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlagIcon from "@mui/icons-material/Flag";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import { URL_API } from "../../../../../constants";

const Style = {
  service: {
    display: "flex",
    alignItems: "flex-end",
    fontSize: "1.6rem",
    gap: 2,
    margin: "0.8rem 0",
  },
};

TourIntro.propTypes = {};

function TourIntro(props) {
  const { tour } = props;
  return (
    <Box>
      <Box
        sx={{ fontSize: "2.5rem", lineHeight: "3rem", fontWeight: "bold", color: "#e60e31", mb: 2 }}
      >
        {tour.title}
      </Box>
      <Box sx={{ height: "50rem" }}>
        <img
          src={`${URL_API.slice(0, -4)}/thumbnail/${tour.thumbnail}`}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ mt: 2, fontSize: "1.7rem", borderBottom: "1px solid #999", pb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ color: "#777", fontSize: "2rem", mr: 0.5 }} />
            <Box>{tour.city}</Box>
          </Box>
          <Box>{tour.time}</Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>Phương Tiện:</Box>
            <DirectionsBusIcon sx={{ color: "#777", fontSize: "2rem", ml: 0.5 }} />
          </Box>
          <Box>mã tour: {tour.code}</Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <EventAvailableIcon sx={{ color: "#777", fontSize: "2rem", mr: 1 }} />
          <Box>Khởi hành: {tour.dateStart}</Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Dịch vụ kèm theo
        </Typography>
        <Grid container spacing="3">
          <Grid item xs={4} sx={Style.service}>
            <DoneIcon sx={{ color: "#428bca", fontSize: "2rem" }} />
            <Box>Bảo hiểm</Box>
          </Grid>
          <Grid item xs={4} sx={Style.service}>
            <FastfoodIcon sx={{ color: "#428bca", fontSize: "2rem" }} />
            <Box>Bữa ăn</Box>
          </Grid>
          <Grid item xs={4} sx={Style.service}>
            <FlagIcon sx={{ color: "#428bca", fontSize: "2rem" }} />
            <Box>Hướng dẫn viên</Box>
          </Grid>
          <Grid item xs={4} sx={Style.service}>
            <i class="fa-solid fa-ticket" style={{ color: "#428bca", fontSize: "2rem" }}></i>
            <Box>Vé tham quan</Box>
          </Grid>
          <Grid item xs={4} sx={Style.service}>
            <DirectionsBusFilledIcon sx={{ color: "#428bca", fontSize: "2rem" }} />
            <Box>Xe đưa đón</Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          fontSize: "1.6rem",
          lineHeight: "2.5rem",
          fontWeight: "500",
          mt: 1,
          textAlign: "justify ",
        }}
      >
        <Box component="span" sx={{ color: "#428bca" }}>
          Tour du lịch Hội An Đà Nẵng 3N2Đ{" "}
        </Box>
        của Vietnam Travel sẽ đưa du khách đến với danh thắng Ngũ Hành Sơn - nơi được mệnh danh là
        Hòn Non Bộ khổng lồ giữa lòng thành phố và phố cổ Hội An đẹp say đắm lòng người.
      </Box>
      <Box>
        <Typography variant="h4" sx={{ mt: 2, color: "#B22222" }}>
          CÓ GÌ HÓT:
        </Typography>
        <Box sx={{ textAlign: "justify " }}>
          <ul>
            <li
              style={{
                fontSize: "1.6rem",
                color: "#0e6805",
                fontWeight: "bold",
                lineHeight: "2.5rem",
              }}
            >
              Chiêm ngưỡng những dãy núi đá Ngũ Hành Sơn sừng sững, huyền ảo
            </li>
            <li
              style={{
                fontSize: "1.6rem",
                color: "#0e6805",
                fontWeight: "bold",
                lineHeight: "2.5rem",
              }}
            >
              Những hang động và các ngôi chùa độc đáo như chùa Linh Ứng, chùa Tam Thai,...
            </li>
            <li
              style={{
                fontSize: "1.6rem",
                color: "#0e6805",
                fontWeight: "bold",
                lineHeight: "2.5rem",
              }}
            >
              Ghé thăm khu trưng bày tại Làng nghề Điêu khắc đá mỹ nghệ với các hiện vật điêu khắc
              của dân tộc.
            </li>
            <li
              style={{
                fontSize: "1.6rem",
                color: "#0e6805",
                fontWeight: "bold",
                lineHeight: "2.5rem",
              }}
            >
              Hành trình tuyệt vời khi đến với phố cổ Hội An - di sản văn hóa của UNESCO. Tham quan
              Hội quán Phúc Kiến, nhà cổ trăm năm tuổi, Chùa Cầu,...
            </li>
          </ul>
        </Box>
        <Box
          sx={{
            textAlign: "justify ",
            fontSize: "1.6rem",
            color: "#0e6805",
            fontWeight: "bold",
            lineHeight: "2.5rem",
          }}
        >
          Hãy nhanh tay đăng ký tour với Vietnam Booking để được trải nghiệm hành trình thú vị tại
          Đà Nẵng và Hội An! Liên hệ tổng đài
          <Box component="span" sx={{ color: "red" }}>
            {" "}
            1900 3398{" "}
          </Box>
          để biết thêm chi tiết.
        </Box>
      </Box>
    </Box>
  );
}

export default TourIntro;
