import React, { useContext, useState } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BusinessIcon from "@mui/icons-material/Business";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import { context } from "../pages/homePage";

function MenuList() {
  const [verify, setVerify] = useState(false);

  const data = useContext(context);

  const { selectedIndex, setSelectedIndex, setContent } = data;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Paper sx={{ height: "100vh", width: "100%" }}>
      <Box className="admin-home__menu">
        <MenuIcon sx={{ margin: "1.5rem 2rem", fontSize: "3rem", fontWeight: "bold" }} />
      </Box>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => {
                handleListItemClick(event, 0);
                setContent("userAccount");
                setVerify(false);
              }}
              sx={{ "&.Mui-selected": { backgroundColor: "#e2e3e5" } }}
            >
              <ListItemIcon>
                <ManageAccountsIcon sx={{ fontSize: "3rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="User's accounts"
                primaryTypographyProps={{ style: { fontSize: "1.7rem" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => {
                handleListItemClick(event, 1);
                setContent("companyAccount");
                setVerify(false);
              }}
              sx={{ "&.Mui-selected": { backgroundColor: "#e2e3e5" } }}
            >
              <ListItemIcon>
                <BusinessIcon sx={{ fontSize: "3rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Company's accounts"
                primaryTypographyProps={{ style: { fontSize: "1.7rem" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={(event) => {
                setVerify(!verify);
              }}
            >
              <ListItemIcon>
                <MarkEmailUnreadIcon sx={{ fontSize: "3rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Verify company's accounts"
                primaryTypographyProps={{ style: { fontSize: "1.7rem" } }}
              />
            </ListItemButton>
          </ListItem>
          {verify ? (
            <Slide direction="up" in>
              <Box className="verify-account__list">
                <List>
                  <ListItem disablePadding sx={{ pl: 2 }}>
                    <ListItemButton
                      selected={selectedIndex === 3}
                      onClick={(event) => {
                        handleListItemClick(event, 3);
                        setContent("unverifyCompany");
                      }}
                      sx={{ "&.Mui-selected": { backgroundColor: "#e2e3e5" } }}
                    >
                      <ListItemIcon>
                        <HourglassBottomOutlinedIcon sx={{ fontSize: "2.5rem" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Unverified company"
                        primaryTypographyProps={{ style: { fontSize: "1.6rem" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: 2 }}>
                    <ListItemButton
                      selected={selectedIndex === 4}
                      onClick={(event) => {
                        handleListItemClick(event, 4);
                        setContent("verifyCompany");
                      }}
                      sx={{ "&.Mui-selected": { backgroundColor: "#e2e3e5" } }}
                    >
                      <ListItemIcon>
                        <DoneAllIcon sx={{ fontSize: "2.5rem" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Verified company"
                        primaryTypographyProps={{ style: { fontSize: "1.6rem" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Slide>
          ) : null}
        </List>
      </Box>
    </Paper>
  );
}

export default MenuList;
