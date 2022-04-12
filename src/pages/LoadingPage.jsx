import React from "react";

// .. material ui
import Grid from "@mui/material/Grid";

const LoadingPage = () => {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        bgcolor: "main.light",
      }}
    >
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_aa0wy04q.json"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300 }}
        loop
        autoplay
      ></lottie-player>
    </Grid>
  );
};

export default LoadingPage;
