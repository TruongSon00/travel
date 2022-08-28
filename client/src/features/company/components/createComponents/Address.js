import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { northern, central, south } from "../../../../fakeData/City";

Address.propTypes = {};

function Address(props) {
  const { city, region, setCity, setRegion } = props;

  const [cities, setCities] = useState([]);

  const handleChangeRegion = (e) => {
    if (e.target.value === "Miền Bắc") {
      setCities(northern);
    } else if (e.target.value === "Miền Trung") {
      setCities(central);
    } else {
      setCities(south);
    }
    setRegion(e.target.value);
  };

  return (
    <>
      <Grid item xs={4}>
        <FormControl
          value={region}
          fullWidth
          sx={{
            "& label": {
              fontSize: "1.4rem",
              paddingRight: 1,
              backgroundColor: "#f0f2f5",
            },
          }}
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-label">Regions</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Regions"
            onChange={handleChangeRegion}
          >
            <MenuItem value={"Miền Bắc"}>Miền Bắc</MenuItem>
            <MenuItem value={"Miền Trung"}>Miền Trung</MenuItem>
            <MenuItem value={"Miền Nam"}>Miền Nam</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl
          value={city}
          fullWidth
          disabled={region ? false : true}
          sx={{
            mb: 2,
            "& label": { fontSize: "1.4rem", paddingRight: 1, backgroundColor: "#f0f2f5" },
          }}
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {cities.map((city) => {
              return (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}

export default Address;
