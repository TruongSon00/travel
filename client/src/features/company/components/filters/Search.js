import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { URL_API } from "../../../../constants";

axios.defaults.withCredentials = true;

function Search(props) {
  const { setTours } = props;
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    console.log("search");
    try {
      const res = await axios.get(`${URL_API}/company/tour/search`, {
        params: {
          key: searchValue,
        },
      });
      console.log(res);
      if (res.status === 200) {
        navigate({ search: `?search=${searchValue}` });
        setTours(res.data.tours);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        height: "3.5rem",
        display: "flex",
        alignItems: "center",
        border: "1px solid #999",
        borderRadius: "0.5rem",
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
