import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import Comment from "../../../../../components/Comment";
import { useState } from "react";

Feedback.propTypes = {};

const cmts = [1, 2, 3, 4, 5, 6];

function Feedback(props) {
  const [viewAll, setViewAll] = useState(true);
  const [comments, setComments] = useState(cmts.slice(0, 4));

  const handleClickViewAllCmt = () => {
    setComments(cmts);
    setViewAll(false);
  };

  const handleClickHideCmt = () => {
    setComments(cmts.slice(0, 4));
    setViewAll(true);
  };

  return (
    <Box sx={{ mt: 2, borderTop: "1px solid #999", pt: 4 }}>
      <Box sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>30 comments</Box>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
        <Avatar>H</Avatar>
        <Box sx={{ width: "100%" }}>
          <TextField placeholder="add a comment..." variant="standard" fullWidth />
        </Box>
      </Box>
      {comments.map(() => {
        return <Comment />;
      })}
      {cmts.length > 4 && viewAll === true ? (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button sx={{ fontSize: "1.4rem" }} onClick={handleClickViewAllCmt}>
            Xem thêm
            <ArrowDropDownIcon color="primary" sx={{ fontSize: "1.8rem" }} />
          </Button>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button sx={{ fontSize: "1.4rem" }} onClick={handleClickHideCmt}>
            Ẩn bớt
            <ArrowDropUpIcon color="primary" sx={{ fontSize: "1.8rem" }} />
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Feedback;
