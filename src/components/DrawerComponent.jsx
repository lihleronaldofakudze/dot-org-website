import React from "react";

// Data
import { categories } from "../services/data";

// Images
import Logo from "../images/dotorg.png";

// Material UI
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const DrawerComponent = ({
  mobileOpen,
  handleDrawerToggle,
  window,
  changePage,
}) => {
  // Variables
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div
      style={{
        backgroundColor: "#131519",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <img src={Logo} alt="Eswatini Business Directory" height="80" />
      </div>
      <Divider />
      <List>
        {categories.map((category, index) => (
          <ListItemText
            key={index}
            onClick={() => changePage(`/category/${category.main}`)}
            primary={category.main}
            sx={{
              color: "#FFFFFF",
              cursor: "pointer",
              p: 0.2,
              textAlign: "center",
              "&:hover": {
                bgcolor: "#F26522",
              },
            }}
          />
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        color: "#131519",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

DrawerComponent.propTypes = {
  window: PropTypes.func,
};

export default DrawerComponent;
