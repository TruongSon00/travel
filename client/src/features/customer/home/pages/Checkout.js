import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import { useState } from "react";
import Address from "../components/checkOut/Address";
import BookingOnline from "../components/checkOut/BookingOnline";
import Order from "../components/checkOut/Order";

Checkout.propTypes = {};

function Checkout(props) {
  const [payment, setPayment] = useState("address");

  return (
    <Box>
      <Header />
      <Container sx={{ pt: 10, mb: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Box
              sx={{
                fontSize: "3rem",
                padding: "2rem 0",
                borderBottom: "3px solid #ed1c24",
                width: "16.5rem",
              }}
            >
              Thanh Toán
            </Box>
            <Box sx={{ mt: 2 }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="address"
                  control={<Radio onChange={() => setPayment("address")} />}
                  label="Thanh toán tại công ty"
                  checked={payment === "address" ? true : false}
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio onChange={() => setPayment("paypal")} />}
                  label="Thanh toán qua paypal"
                />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
              </RadioGroup>
            </Box>
            <Box>{payment === "address" ? <Address /> : <BookingOnline />}</Box>
          </Grid>

          <Grid item xs={4}>
            <Order />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default Checkout;
