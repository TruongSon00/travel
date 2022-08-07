import React, { useState } from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

MenuInfo.propTypes = {};

function MenuInfo(props) {
  const { setLoginStatus, setUserInfo } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const [cookie, removeCookie] = useCookies(["token"]);
  const [role, setRole, removeRole] = useCookies("role");

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    removeCookie("token");
    removeRole("role");
    setLoginStatus(false);
    setUserInfo(null);
  };

  return (
    <Box>
      <ArrowDropDownIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: "2.5rem", color: "#fff", cursor: "pointer" }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: "1.6rem" }}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => navigate("/transaction-history")} sx={{ fontSize: "1.6rem" }}>
          Transaction History
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ fontSize: "1.6rem" }}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default MenuInfo;
