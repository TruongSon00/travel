import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import { Box, Button, Container, Grid, TextField } from "@mui/material";

import Header from "../../../components/headerCompany";
import Footer from "../../../components/footer";
import EditForm from "../components/EditForm";
import { URL_API } from "../../../constants";

axios.defaults.withCredentials = true;

EditPage.propTypes = {};

function EditPage(props) {
  const location = useLocation();

  const [tour, setTour] = useState();

  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    const getCompanyInfo = async () => {
      const res = await axios.get(
        `${URL_API}/company/tour/show/${queryString.parse(location.search)._id}`
      );
      if (res.status === 200) {
        setTour(res.data.tour[0]);
      }
    };
    getCompanyInfo();
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile("person.png");
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const handleClickDelete = async () => {
    const res = await axios.put(`${URL_API}/company/tour/del`, {
      tourId: queryString.parse(location.search)._id,
    });
    console.log(res);
  };

  return (
    <Box>
      <Header />

      <Container sx={{ pt: 13, pb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box sx={{ width: "100%", height: "50rem" }}>
              {tour ? (
                <img
                  src={
                    selectedFile ? preview : `${URL_API.slice(0, -4)}/thumbnail/${tour.thumbnail}`
                  }
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <></>
              )}
            </Box>
            <Box sx={{ mt: 3, width: "40%" }}>
              <Button
                fullWidth
                variant="contained"
                color="error"
                sx={{ height: "4rem", fontSize: "1.6rem", fontWeight: "bold" }}
                onClick={handleClickDelete}
              >
                Delete Tour
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <EditForm onSelectFile={onSelectFile} selectedFile={selectedFile} tour={tour} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default EditPage;
