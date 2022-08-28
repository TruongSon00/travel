import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import { Box, Container, Grid } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import TourIntro from "../components/tourDetail/TourIntro";
import BookingRight from "../components/tourDetail/BookingRight";
import Planning from "../components/tourDetail/Planning";
import RelatedTour from "../components/tourDetail/RelatedTour";
import Feedback from "../components/tourDetail/Feedback";
import BackToTop from "../../../../components/BackToTop";
import { URL_API } from "../../../../constants";

axios.defaults.withCredentials = true;

function TourDetailPage(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const params = useRef(queryString.parse(location.search)._id);

  const [tour, setTour] = useState({});

  useEffect(() => {
    const getTours = async () => {
      try {
        const res = await axios.get(`${URL_API}/tour/show/${params.current}`);
        if (res.status === 200) {
          setTour(res.data.tour[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Grid container sx={{ pt: 10, mb: 2 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                fontSize: "1.8rem",
                lineHeight: "1.8rem",
              }}
            >
              <Box sx={{ color: "#083e7e" }}>Du lịch</Box>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1.3rem", margin: "0 0.4rem" }} />
              <Box
                sx={{ color: "#083e7e", cursor: "pointer" }}
                onClick={() =>
                  navigate({
                    pathname: "/tours",
                    search: queryString.stringify({ _place: "center_vietnam" }),
                  })
                }
              >
                Du lịch {tour.region}
              </Box>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1.3rem", margin: "0 0.4rem" }} />
              <Box
                sx={{ color: "#083e7e", cursor: "pointer" }}
                // onClick={() =>
                //   navigate({
                //     pathname: "/tours",
                //     search: queryString.stringify({ _place: "center_vietnam" }),
                //   })
                // }
              >
                {tour.city}
              </Box>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1.3rem", margin: "0 0.4rem" }} />
              <Box sx={{ color: "#646363" }}>{tour.title}</Box>
            </Box>
          </Grid>
          <Grid container sx={{ mt: 2 }} spacing={4}>
            <Grid item xs={8}>
              <TourIntro tour={tour} />
              <Planning />
              <Feedback />
              <RelatedTour />
            </Grid>
            <Grid item xs={4} sx={{}}>
              <BookingRight tour={tour} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default TourDetailPage;
