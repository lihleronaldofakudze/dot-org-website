import React from "react";

// Firebase
import { useSelector } from "react-redux";
import { isEmpty } from "react-redux-firebase";

// Material Icons
import NotificationIcon from "@mui/icons-material/NotificationsActiveRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";

// Material UI

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const UserComponent = ({ changePage }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <>
      {isEmpty(auth) ? (
        <Button
          variant="outlined"
          color="secondary"
          sx={{ m: 1 }}
          onClick={() => changePage("/login")}
        >
          Register / Login
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => changePage("/add_organisation")}
          >
            Add Org
          </Button>
          <IconButton
            aria-label="notifications"
            onClick={() => changePage("/notifications")}
          >
            <NotificationIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>

          <IconButton
            aria-label="profile"
            onClick={() => changePage("/profile")}
          >
            <PersonIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </>
      )}
    </>
  );
};

export default UserComponent;
