import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Tour from "../../../../components/Tour";
import { URL_API } from "../../../../constants";

axios.defaults.withCredentials = true;

CompanyPage.propTypes = {};

function CompanyPage(props) {
  const location = useLocation();
  const params = useRef(queryString.parse(location.search)._id);

  const [companyInfo, setCompanyInfo] = useState({});
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getCompanyInfo = async () => {
      const res = await axios.get(`${URL_API}/tour/showCompany/${params.current}`);
      if (res.status === 200) {
        setTours(res.data.company[0].tours);
        setCompanyInfo(res.data.company[0]);
      }
    };
    getCompanyInfo();
  }, []);

  return (
    <Box>
      <Header />

      <Paper sx={{ pt: 15 }}>
        <Container sx={{ pb: 2 }}>
          <Box
            sx={{
              display: "flex",
              align: "center",
              gap: 15,
              fontSize: "1.8rem",
            }}
          >
            <Box
              sx={{
                width: "40rem",
                height: "15rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <img
                src="https://vietnam.travel/themes/custom/vietnamtourism/images/logo.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Box>
                <TourOutlinedIcon color="action" sx={{ fontSize: "1.6rem", mr: 1 }} />
                <Box component="span">Số lượng tour: </Box>
                <Box component="span" sx={{ color: "#d0011b" }}>
                  {tours.length}
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <DoneIcon color="action" sx={{ fontSize: "1.6rem", mr: 1 }} />
                <Box component="span">Số tour đã đặt: </Box>
                <Box component="span" sx={{ color: "#d0011b" }}>
                  30
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <DoneAllOutlinedIcon color="action" sx={{ fontSize: "1.6rem", mr: 1 }} />
                <Box component="span">Tỉ lệ tour thành công: </Box>
                <Box component="span" sx={{ color: "#d0011b" }}>
                  100%
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <StarBorderOutlinedIcon color="action" sx={{ fontSize: "1.6rem", mr: 1 }} />
                <Box component="span">Đánh giá: </Box>
                <Box component="span" sx={{ color: "#d0011b" }}>
                  4.9 (30 Đánh giá)
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <PersonAddAlt1OutlinedIcon color="action" sx={{ fontSize: "1.6rem", mr: 1 }} />
                <Box component="span">Đã tham gia: </Box>
                <Box component="span" sx={{ color: "#d0011b" }}>
                  3 năm trước
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Paper>

      <Container sx={{ pb: 5, mt: 3 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}></Grid> */}
          {tours.length >= 1 ? (
            <>
              {tours.map((tour) => (
                <Grid item md={4} sm={6} xs={12} key={tour._id}>
                  <Tour tour={tour} />
                </Grid>
              ))}
            </>
          ) : (
            <Box sx={{ margin: "3rem auto", fontSize: "1.8rem", fontStyle: "italic" }}>
              Rất tiếc công ty này hiện chưa có tour nào!
            </Box>
          )}
          <Pagination sx={{ margin: "1.5rem auto" }} size="large" count={10} color="primary" />
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default CompanyPage;
