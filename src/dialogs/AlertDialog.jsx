import React from "react";

//Material UI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const AlertDialog = ({ alert, setAlert, message }) => {
  return (
    <Dialog
      maxWidth="xl"
      open={alert}
      onClose={() => setAlert(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Eswatini Dot Org</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAlert(false)} color="primary" variant="text">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
