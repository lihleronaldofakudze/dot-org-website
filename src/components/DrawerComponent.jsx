import React from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Data
import { categories } from "../services/data";

// Material UI
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const DrawerComponent = () => {
  // variables
  const drawerWidth = 280;
  const navigate = useNavigate();

  const changePage = (url) => navigate(url);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", bgcolor: "#131519" }}>
        <List>
          {categories.map((category, index) => (
            <ListItem
              onClick={() => changePage(`category/${category.main}`)}
              selected={false}
              sx={{
                cursor: "pointer",
                color: "#FFFFFF",
                px: 1,
                "&:hover": {
                  bgcolor: "#1C1D22",
                },
              }}
            >
              <ListItemText primary={category.main} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
