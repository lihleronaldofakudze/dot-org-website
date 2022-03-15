import React from "react";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ p: 1 }}>
      <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
        Home Page
      </Typography>
    </Container>
  );
};

export default HomePage;
