import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

Reaction.propTypes = {};

function Reaction(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <ThumbUpOffAltIcon sx={{ fontSize: "1.8rem" }} />
        <Box>10</Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <ThumbDownOffAltIcon sx={{ fontSize: "1.8rem" }} />
        <Box>1</Box>
      </Box>
    </Box>
  );
}

export default Reaction;
