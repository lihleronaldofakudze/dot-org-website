import React from "react";

//Components
import NavbarComponent from "../components/NavbarComponent";
import DrawerComponent from "../components/DrawerComponent";

// Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

const HomePage = () => {
  return (
    <Box>
      <CssBaseline />
      <NavbarComponent />
      <DrawerComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="body1" color="initial">
          Pariatur culpa labore officia aliqua do veniam minim officia id qui
          laboris sint ea.Velit incididunt enim dolor amet duis cillum sit
          ullamco magna do eu.Proident exercitation commodo adipisicing ipsum
          ipsum in Lorem do nostrud dolor minim qui.Commodo esse laboris sunt
          eiusmod incididunt enim.Velit et nisi aliquip velit Lorem commodo
          adipisicing veniam mollit nostrud voluptate.Officia qui eiusmod id
          occaecat pariatur minim.Aute cillum minim non quis.Minim ad veniam
          laborum qui.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
