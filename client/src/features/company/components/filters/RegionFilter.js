import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel, List, ListItem, Typography } from "@mui/material";

RegionFilter.propTypes = {};

function RegionFilter(props) {
  return (
    <Box sx={{ borderTop: "1px solid #9999", mt: 3, pt: 2 }}>
      <Typography variant="h4" sx={{ fontSize: "1.8rem" }}>
        Regions
      </Typography>
      <Box>
        <List>
          {[
            { value: "northern", label: "Miền Bắc" },
            { value: "central", label: "Miền Trung" },
            { value: "south", label: "Miền Nam" },
          ].map((region) => {
            return (
              <ListItem key={region.value} sx={{ mt: 0 }}>
                <FormControlLabel
                  control={<Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }} />}
                  label={<Typography sx={{ fontSize: "1.6rem" }}>{region.label}</Typography>}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}

export default RegionFilter;
