import React from "react";

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
  return (
    <AppBar position="relative" color="primary" elevation={0}>
      <Grid container spacing={1} alignItems="center">
        <Grid item md={3}>
          <Toolbar>
            <Typography variant="h6">DOT-ORG</Typography>
          </Toolbar>
        </Grid>
        <Grid item md={6}>
          <TextField
            id="search"
            label="Search"
            //   value={}
            //   onChange={}
            color="textPrimary"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={3}>
          <Button variant="contained" color="secondary">
            Register
          </Button>
          <IconButton aria-label="notifications">
            <NotificationIcon />
          </IconButton>
          <IconButton aria-label="messages">
            <ChatIcon />
          </IconButton>
          <IconButton aria-label="user">
            <PersonIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavbarComponent;
