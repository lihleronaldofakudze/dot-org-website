import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const LoadingPage = () => {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        bgcolor: 'main.light'
      }}
    >
      <Typography variant="h1" color="initial">
        Loading....
      </Typography>
    </Grid>
  );
};

export default LoadingPage;
