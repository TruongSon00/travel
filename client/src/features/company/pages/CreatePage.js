import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import Header from "../../../components/headerCompany";
import Footer from "../../../components/footer";
import CreateForm from "../components/CreateForm";

CreatePage.propTypes = {};

function CreatePage(props) {
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile("person.png");
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Box>
      <Header />

      <Container sx={{ pt: 13, pb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "50rem",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px",
              }}
            >
              <img
                src={
                  !!preview
                    ? preview
                    : "https://vietnam.travel/sites/default/files/2021-11/KV%20resize-01_0.jpg"
                }
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <CreateForm onSelectFile={onSelectFile} selectedFile={selectedFile} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default CreatePage;
