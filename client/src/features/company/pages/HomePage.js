import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import Header from "../../../components/headerCompany";
import Footer from "../../../components/footer";
import Tour from "../../../components/Tour";
import Search from "../components/filters/Search";
import RegionFilter from "../components/filters/RegionFilter";
import SortPriceFilter from "../components/filters/SortPriceFilter";
import { URL_API } from "../../../constants";

axios.defaults.withCredentials = true;

HomePage.propTypes = {};

function HomePage(props) {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getInfor = async () => {
      try {
        const res = await axios.get(`${URL_API}/company/show`);
        if (res.status === 200) {
          setTours(res.data.company[0].tours);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getInfor();
  }, []);

  // console.log(tours);

  return (
    <Box>
      <Header />

      <Container sx={{ pt: 13, pb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper
              sx={{
                padding: "2rem 1rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <Search setTours={setTours} />
              <SortPriceFilter setTours={setTours} tours={tours} />
              <RegionFilter />
              {/* <PriceFilter /> */}
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}></Grid> */}
              {tours.map((tour) => (
                <Grid item md={4} sm={6} xs={12} key={tour._id}>
                  <Tour tour={tour} />
                </Grid>
              ))}
            </Grid>
            <Pagination
              sx={{
                margin: "1.5rem auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              size="large"
              count={10}
              color="primary"
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default HomePage;
