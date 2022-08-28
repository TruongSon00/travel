import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@mui/material";
import Reaction from "./Reaction";

Comment.propTypes = {};

function Comment(props) {
  return (
    <Box>
      <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar>D</Avatar>
        <Box>
          <Box>
            <Box component="span" sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Dat ngu
            </Box>
            <Box component="span" sx={{ fontSize: "1.2rem", ml: 1 }}>
              2 ngay truoc
            </Box>
          </Box>
          <Box sx={{ fontSize: "1.6rem", mt: 1, fontWeight: "500" }}>
            Hữu Trung vẫn là 1 cái gì đó, bắn rap quá ghê
          </Box>
          {/* <Reaction /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Comment;
