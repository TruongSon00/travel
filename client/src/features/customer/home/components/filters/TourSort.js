import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

TourSort.propTypes = {};

function TourSort(props) {
  const { tours, setTours } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const params = queryString.parse(location.search)._place;

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getTours = () => {
      if (value === "1") {
        const newTours = [...tours];
        newTours.sort((a, b) => {
          return a.price - b.price;
        });
        setTours(newTours);
        navigate({
          pathname: "/tours",
          search: queryString.stringify({ _place: params, _sort: "low-to-hight" }),
        });
      } else {
        const newTours = [...tours];
        newTours.sort((a, b) => {
          return b.price - a.price;
        });
        setTours(newTours);
        navigate({
          pathname: "/tours",
          search: queryString.stringify({ _place: params, _sort: "hight-to-low" }),
        });
      }
    };
    getTours();
  }, [value]);

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Tabs value={value} onChange={handleChangeTab}>
        <Tab value="1" label="Giá Thấp Tới Cao" sx={{ fontSize: "1.4rem" }} />
        <Tab value="2" label="Giá Cao Tới Thấp" sx={{ fontSize: "1.4rem" }} />
      </Tabs>
    </Box>
  );
}

export default TourSort;
