import React, { useState } from "react";

// React Router Dom
import { Navigate, useNavigate } from "react-router-dom";

// Firebase
import { useSelector } from "react-redux";
import { useFirebase, isEmpty } from "react-redux-firebase";

// Material UI
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";

const ProfilePage = () => {
  // Variables
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const navigate = useNavigate();

  // State
  const [loading, setLoading] = useState();

  const changePage = (page) => {
    navigate(page);
  };

  const logOut = async () => {
    setLoading(true);
    await firebase.auth().signOut();
    setLoading(false);
  };

  if (isEmpty(auth)) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Profile Page</h1>
      <Button
        variant="contained"
        color="warning"
        sx={{ mr: 2 }}
        onClick={() => changePage("/forgot_password")}
      >
        Change Password
      </Button>
      <LoadingButton
        variant="contained"
        loading={loading}
        color="error"
        onClick={() => logOut()}
      >
        Log Out
      </LoadingButton>
    </>
  );
};

export default ProfilePage;
