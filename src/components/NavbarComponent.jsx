import React, { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

//Responsive
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import UserComponent from "./UserComponent";
import DrawerComponent from "./DrawerComponent";

//Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const drawerWidth = 240;

const NavbarComponent = (props) => {
  // Variables
  const navigate = useNavigate();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  // State
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const changePage = (url) => {
    navigate(url);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: { sm: `(theme) => theme.zIndex.drawer + 1,` },
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
              textAlign: "center",
            }}
          >
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              md={3}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
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
                color="secondary"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item container md={3} justifyContent="space-around">
              <UserComponent changePage={changePage} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        changePage={changePage}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {desktop ? <></> : <Toolbar />}
        {props.children}
      </Box>
    </Box>
  );
};

export default NavbarComponent;
