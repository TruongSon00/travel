import React from "react";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

Search.propTypes = {
  placeholder: PropTypes.string,
};

function Search({ placeholder }) {
  return (
    <Box sx={{ width: "50%", margin: "5rem auto", position: "relative" }}>
      <TextField
        size="medium"
        placeholder={placeholder}
        fullWidth
        inputProps={{ style: { fontSize: "1.6rem", paddingRight: "6rem" } }}
      />
      <SearchIcon sx={{ fontSize: "3rem", position: "absolute", top: "25%", right: "2rem" }} />
    </Box>
  );
}

export default Search;
