import React from "react";

// Firebase
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

// Component
import OrganisationDesignComponent from "../components/OrganisationDesignComponent";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  useFirestoreConnect([
    {
      collection: "business",
      orderBy: ["postedAt", "desc"],
    },
  ]);
  const businesses = useSelector((state) => state.firestore.ordered.business);
  return (
    <Container maxWidth="xl" sx={{ p: 1 }}>
      <Typography
        variant="h5"
        color="initial"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        All Categories
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 1,
        }}
      >
        {businesses &&
          businesses.map((business) => (
            <Grid item xs={12} sm={6} md={4} key={business.id}>
              <OrganisationDesignComponent business={business} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
