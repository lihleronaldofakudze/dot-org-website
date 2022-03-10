import React, { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Icons
import NotificationIcon from "@mui/icons-material/NotificationsActiveRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";
import ChatIcon from "@mui/icons-material/ChatRounded";

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const NavbarComponent = () => {
  // Variables
  const navigate = useNavigate();

  // State
  const [search, setSearch] = useState("");

  const changePage = (url) => {
    navigate(url);
  };
  return (
    <AppBar
      position="relative"
      color="primary"
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Grid container spacing={1} alignItems="center">
        <Grid item md={3}>
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => changePage("/")}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#1C1D22",
                },
              }}
            >
              DOT-ORG
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item md={6}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item container md={3} justifyContent="space-around">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => changePage("/add_organisation")}
          >
            Add Org
          </Button>
          <IconButton
            aria-label="notifications"
            onClick={() => changePage("/notifications")}
          >
            <NotificationIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <IconButton
            aria-label="messages"
            onClick={() => changePage("/messages")}
          >
            <ChatIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <IconButton
            aria-label="profile"
            onClick={() => changePage("/profile")}
          >
            <PersonIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavbarComponent;
