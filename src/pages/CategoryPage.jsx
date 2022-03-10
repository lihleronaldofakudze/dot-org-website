import React from "react";

// React Router Dom
import { useParams } from "react-router-dom";

// Components
import NavbarComponent from "../components/NavbarComponent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const CategoryPage = () => {
  // variables
  const { category } = useParams();
  return (
    <>
      <NavbarComponent />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
          {category} Category
        </Typography>
      </Container>
    </>
  );
};

export default CategoryPage;
