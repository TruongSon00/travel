import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";

import { Grid, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

LocationField.propTypes = {};

function LocationField(props) {
  const { locationsRef } = props;

  const [count, setCount] = useState(1);

  const fieldLenght = useRef(count);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddField = () => {
    setCount((prev) => prev + 1);
    fieldLenght.current = count + 1;
    if (fieldLenght.current >= 7) {
      fieldLenght.current = 6;
      enqueueSnackbar("Địa chỉ cơ sở tối đa 6", { variant: "error" });
    }
  };

  // const handleHideField = () => {

  // }

  const handleOnChange = (e, index) => {
    locationsRef.current[index] = e.target.value;
  };

  return [...new Array(fieldLenght.current)].map((i, index) => {
    return (
      <Grid item xs={6} key={index}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            name="location"
            label={`Địa chỉ cơ sở ${index + 1}`}
            variant="standard"
            color="info"
            focused
            fullWidth
            InputLabelProps={{ style: { fontSize: "1.6rem", color: "#6C6C6C" } }}
            inputProps={{ style: { color: "#fff", fontSize: "1.8rem" } }}
            sx={{ "& .MuiInput-underline:after": { borderBottomColor: "#0db8de" } }}
            onChange={(e) => handleOnChange(e, index)}
          />
          <IconButton onClick={handleAddField}>
            <AddIcon sx={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold" }} />
          </IconButton>
          {/* <IconButton onClick={handleHideField}>
                    <CloseIcon sx={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold" }} />
                  </IconButton> */}
        </Box>
      </Grid>
    );
  });
}

export default LocationField;
