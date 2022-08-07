import React from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import NumberFormat from "react-number-format";

PriceFilter.propTypes = {};

function PriceFilter(props) {
  return (
    <Box sx={{ borderTop: "1px solid #9999", mt: 1, pt: 2 }}>
      <Typography variant="h4" sx={{ fontSize: "1.8rem" }}>
        Price
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", flexFlow: "row nowrap", alignItems: "center", mb: 1 }}>
          <NumberFormat
            thousandSeparator={true}
            suffix={" vnd"}
            customInput={TextField}
            fullWidth
            label="from"
            size="small"
          />
          <Box component="span" sx={{ margin: "0 5px" }}>
            -
          </Box>
          <NumberFormat
            thousandSeparator={true}
            suffix={" vnd"}
            customInput={TextField}
            fullWidth
            label="to"
            size="small"
          />
        </Box>
        <Box size="small" sx={{ mb: 2 }}>
          <Button variant="outlined">Search</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PriceFilter;
