import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

import { URL_API } from "../../../../../constants";

axios.defaults.withCredentials = true;

Search.propTypes = {};

function Search(props) {
  const { tours, setTours } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    const res = await axios.get(`${URL_API}/tour/search`, {
      params: {
        key: searchValue,
      },
    });
    if (res.status === 200) {
      setTours(res.data.tours);
      setSearchValue("");
    }
  };

  return (
    <Box
      sx={{
        width: "80%",
        height: "3.5rem",
        display: "flex",
        alignItems: "center",
        border: "1px solid #999",
        borderRadius: "0.5rem",
        margin: "0 auto",
      }}
    >
      <Box sx={{ width: "85%", pl: 1, pr: 1 }}>
        <input
          value={searchValue}
          type="text"
          style={{ width: "100%", height: "100%", border: "none", outline: "none" }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid #e2ddddde",
          cursor: "pointer",
        }}
        onClick={handleSearch}
      >
        <SearchIcon sx={{ fontSize: "2.3rem" }} />
      </Box>
    </Box>
  );
}

export default Search;
