import React, { useState } from "react";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        color="textPrimary"
        sx={{
          mb: 4,
        }}
      >
        Forgot Password
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{
          my: 1,
        }}
      >
        Enter your email address and we will send you a link to reset your
      </Typography>
      <TextField
        id="email"
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{
          ml: 1,
        }}
      >
        Send
      </Button>
    </Container>
  );
};

export default ForgotPasswordPage;
