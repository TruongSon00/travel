import React from "react";
import PropTypes from "prop-types";

import { addresses } from "../../../../../fakeData";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";

Address.propTypes = {};

function Address(props) {
  return (
    <Box>
      {addresses.map((address) => {
        return (
          <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
            <Box sx={{ flex: " 1 1 auto", maxWidth: "25rem" }}>
              <img
                src={address.thumbnail}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ flex: "1 1 auto" }}>
              <Box sx={{ fontSize: "1.6rem", color: "#037dfa", fontWeight: "bold" }}>
                {address.city}
              </Box>
              <Box>
                <ul>
                  {address.address.map((data) => {
                    return (
                      <li key={data} style={{ listStyle: "none", fontSize: "1.6rem" }}>
                        - Địa chỉ: {data}
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box sx={{ mt: 3 }}>
        <Box
          sx={{
            fontSize: "3rem",
            padding: "2rem 0",
            borderBottom: "3px solid #ed1c24",
            width: "23rem",
          }}
        >
          Thông tin liên hệ
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField fullWidth label="Full name" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Phone number" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Address" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Other requirements" />
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: 1,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                color: "#888",
              }}
            >
              <LockIcon sx={{ fontSize: "1.6rem" }} />
              <Box component="span">
                www.vietnamtravel.com cam kết bảo mật thông tin của quý khách.
              </Box>
            </Box>
            <Button variant="contained" sx={{ fontSize: "1.4rem", mt: 2 }}>
              Hoàn tất đặt tour
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Address;
