import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./styles.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box sx={{ backgroundColor: "#35322d" }}>
      <Container>
        <Grid container>
          <Grid item md={4} xs={6} sx={{ textAlign: "center" }}>
            <ul className="footer__list">
              <li>Về Với Chúng Tôi</li>
              <li>Chúng tôi luôn cố gắng để mang tới</li>
              <li>những dịch vụ tốt nhất cho du khách</li>
              <li>bằng sự tận tâm và nhiệt huyết</li>
            </ul>
          </Grid>
          <Grid item md={4} xs={6} sx={{ textAlign: "center" }}>
            <ul className="footer__list">
              <li>Nhà Tài trợ</li>
              <li>Phở Kingdom</li>
              <li>Lote Cafe</li>
              <li>Rice Viet</li>
            </ul>
          </Grid>
          <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
            <ul className="footer__list footer__contact">
              <li>Theo Dõi TrênTôi</li>
              <li>
                <Box sx={{ mr: 1 }}>Facebook</Box>
                <FacebookIcon sx={{ fontSize: "1.8rem" }} />
              </li>
              <li>
                <Box sx={{ mr: 1 }}>Instagram</Box>
                <FaInstagramSquare style={{ fontSize: "1.8rem" }} />
              </li>
              <li>
                <Box sx={{ mr: 1 }}>Tiktok</Box>
                <FaTiktok style={{ fontSize: "1.6rem" }} />
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sx={{ margin: "4rem 0 5rem" }}>
            <Box
              sx={{ color: "#fff", fontSize: "1.8rem", lineHeight: "1.8rem", textAlign: "center" }}
            >
              Created By
              <Box component="span" sx={{ color: "#daa15e" }}>
                {" "}
                Mr.Hoang{" "}
              </Box>
              | Hoangpbgch190102@fpt.edu.vn
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
