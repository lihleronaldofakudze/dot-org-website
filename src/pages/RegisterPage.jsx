import React, { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Firebase
import { useFirebase, useFirestore } from "react-redux-firebase";

// Image
import Logo from "../images/dotorg.png";

// Components
import AlertDialog from "../dialogs/AlertDialog";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

const RegisterPage = () => {
  // Variables
  const navigate = useNavigate();
  const firebase = useFirebase();
  const firestore = useFirestore();

  //State
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  // const [] = useState();

  //create account
  const register = async () => {
    setLoading(true);
    if (
      emailAddress.length !== 0 &&
      password.length !== 0 &&
      confirmPassword.length !== 0
    ) {
      if (password === confirmPassword) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
          .then(async (response) => {
            await firestore.collection("users").doc(response.uid).set({
              emailAddress: emailAddress,
            });
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
        setMessage("Passwords do not match.");
        setAlert(true);
      }
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
          .then(async (response) => {
            await firestore.collection("users").doc(response.uid).set({
              emailAddress: response.emailAddress,
            });
            changePage("/");
            setLoading(false);
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

  //Navigate to new page
  const changePage = (url) => {
    navigate(url);
  };
  return (
    <Container maxWidth="sm" sx={{ p: 1 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 5,
        }}
      >
        <img src={Logo} alt="Eswatini Business Directory" height="100" />
      </div>
      <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
        Welcome to Dot Org
      </Typography>
      <Typography variant="h6" color="initial" sx={{ textAlign: "center" }}>
        "Eswatini's Business Site"
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ textAlign: "center", mt: 3 }}
      >
        Create your account
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
      <TextField
        id="confirm_password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        margin="normal"
        size="small"
        fullWidth
        type="password"
      />
      <LoadingButton
        variant="contained"
        color="secondary"
        loading={loading}
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => register()}
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
        loading={loading}
        fullWidth
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
        onClick={() => changePage("/login")}
      >
        I have an account.
      </Typography>
      <AlertDialog alert={alert} setAlert={setAlert} message={message} />
    </Container>
  );
};

export default RegisterPage;
