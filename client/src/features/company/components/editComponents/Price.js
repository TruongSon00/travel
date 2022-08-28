import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { Grid, TextField } from "@mui/material";

Price.propTypes = {};

function Price(props) {
  const { price, saleOff, setPrice, setSaleOff } = props;

  return (
    <>
      <Grid item xs={6}>
        <NumberFormat
          focused={price ? true : false}
          variant="outlined"
          thousandSeparator={true}
          value={price}
          customInput={TextField}
          fullWidth
          label="Price"
          onValueChange={(values) => {
            setPrice(values.value);
          }}
          InputLabelProps={{
            style: { fontSize: "1.4rem", paddingRight: 4, backgroundColor: "#f0f2f5" },
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <NumberFormat
          focused={saleOff ? true : false}
          variant="outlined"
          thousandSeparator={true}
          value={saleOff}
          customInput={TextField}
          fullWidth
          label="SaleOff"
          onValueChange={(values) => {
            setSaleOff(values.value);
          }}
          InputLabelProps={{
            style: { fontSize: "1.4rem", paddingRight: 4, backgroundColor: "#f0f2f5" },
          }}
        />
      </Grid>
    </>
  );
}

export default Price;
