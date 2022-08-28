import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

SortPriceFilter.propTypes = {};

function SortPriceFilter(props) {
  const { tours, setTours } = props;

  const navigate = useNavigate();

  const [increase, setIncrease] = useState(true);
  const [decrease, setDecrease] = useState(false);

  const handleClickIncrease = () => {
    setIncrease(true);
    setDecrease(false);
    const newTours = [...tours];
    newTours.sort((a, b) => {
      return a.price - b.price;
    });
    setTours(newTours);
    navigate({ search: "?search=low - to - high" });
  };

  const handleClickDecrease = () => {
    setDecrease(true);
    setIncrease(false);
    const newTours = [...tours];
    newTours.sort((a, b) => {
      return b.price - a.price;
    });
    setTours(newTours);
    navigate({ search: "?search=high - to - low" });
  };

  return (
    <Box sx={{ borderTop: "1px solid #9999", mt: 3, pt: 2 }}>
      <Typography variant="h4" sx={{ fontSize: "1.8rem" }}>
        Sort by price
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Chip
          label="Giá từ thấp đến cao"
          color={increase ? "info" : "default"}
          sx={{ fontSize: "1.6rem" }}
          onClick={handleClickIncrease}
        />
        <Chip
          label="Giá từ cao đến thấp"
          color={decrease ? "info" : "default"}
          sx={{ fontSize: "1.6rem", mt: 2 }}
          onClick={handleClickDecrease}
        />
      </Box>
    </Box>
  );
}

export default SortPriceFilter;
