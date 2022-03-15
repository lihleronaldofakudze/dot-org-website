import React, { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Firebase
import { useFirebase } from "react-redux-firebase";

// Components
import AlertDialog from "../dialogs/AlertDialog";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

const LoginPage = () => {
  // Variables
  const navigate = useNavigate();
  const firebase = useFirebase();

  // State
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState();
  // const [] = useState();

  const changePage = (url) => {
    navigate(url);
  };

  const login = async () => {
    setLoading(true);
    if (emailAddress.length !== 0 && password.length !== 0) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(async (response) => {
          setLoading(false);
          changePage("/");
        })
        .catch((error) => {
          setLoading(false);
          setMessage(error.message);
          setAlert(true);
        });
    } else {
      setLoading(false);
      setMessage("Please enter all required fields.");
      setAlert(true);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase
          .auth()
          .signInWithPopup(provider)
          .then((_) => {
            setLoading(false);
            changePage("/");
          })
          .catch((error) => {
            setLoading(false);
            setMessage(error.message);
            setAlert(true);
          });
      })
      .catch((error) => {
        setLoading(false);
        setMessage(error.message);
        setAlert(true);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ p: 1 }}>
      <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
        Welcome back to Dot Org
      </Typography>
      <Typography variant="h6" color="initial" sx={{ textAlign: "center" }}>
        "Eswatini's Business Site"
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ textAlign: "center", mt: 3 }}
      >
        Access your account
      </Typography>
      <TextField
        id="email"
        label="Email Address"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        margin="normal"
        size="small"
        fullWidth
        type="email"
      />
      <TextField
        id="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        size="small"
        fullWidth
        type="password"
      />
      <LoadingButton
        variant="contained"
        loading={loading}
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => login()}
      >
        Continue
      </LoadingButton>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ textAlign: "center", mt: 2 }}
      >
        or
      </Typography>
      <LoadingButton
        variant="contained"
        color="error"
        fullWidth
        loading={loading}
        sx={{ mt: 2 }}
        onClick={() => signInWithGoogle()}
      >
        Continue with Google Account
      </LoadingButton>
      <Typography
        variant="h6"
        color="success"
        sx={{
          textAlign: "center",
          mt: 2,
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        onClick={() => changePage("/register")}
      >
        I don't have an account.
      </Typography>
      <AlertDialog alert={alert} setAlert={setAlert} message={message} />
    </Container>
  );
};

export default LoginPage;
