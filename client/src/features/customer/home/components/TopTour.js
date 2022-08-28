import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper } from "@mui/material";

TopTours.propTypes = {};

function TopTours(props) {
  return (
    <Paper
      sx={{
        padding: "1rem 2rem",
        mt: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ fontSize: "1.3rem", color: "#00a698" }}>Hoangkatour.com.vn</Box>
        <Button variant="outlined" color="success">
          Giới thiệu cty
        </Button>
      </Box>
      <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", lineHeight: "2rem", mt: 1 }}>
        Tour Sapa 3 ngày 2 đêm | Moana – Fansipan – Bản Cát Cát
      </Box>
      <Box sx={{ textAlign: "right", mt: 1 }}>
        <Button variant="contained" size="large">
          Xem thêm
        </Button>
      </Box>
    </Paper>
  );
}

export default TopTours;
