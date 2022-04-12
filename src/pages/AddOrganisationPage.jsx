import React, { useState } from "react";

// Extras
import imageCompressor from "browser-image-compression";

// Components
import AlertDialog from "../dialogs/AlertDialog";

// Firebase
import { useFirestore, useFirebase } from "react-redux-firebase";

// Data
import { categories } from "../services/data";

// Material UI
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuItem from "@mui/material/MenuItem";

const AddOrganisationPage = () => {
  // variables
  const firestore = useFirestore();
  const firebase = useFirebase();

  // States
  const [logo, setLogo] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [poBox, setPoBox] = useState("");
  const [weekdaysHours, setWeekdaysHours] = useState("");
  const [holidaysHours, setHolidaysHours] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const options = {
    maxSizeMB: 2,
    useWebWorker: true,
  };

  const addOrganisation = async () => {
    setLoading(true);
    const { uid } = firebase.auth().currentUser;
    if (companyName.length !== 0 && mainCategory.length !== 0) {
      if (logo !== null) {
        await imageCompressor(logo, options)
          .then(async (compressedImage) => {
            await firebase
              .storage()
              .ref(`logos/${compressedImage.name}`)
              .put(compressedImage)
              .then(async (_) => {
                await firebase
                  .storage()
                  .ref("logos")
                  .child(compressedImage.name)
                  .getDownloadURL()
                  .then(async (url) => {
                    await firestore
                      .collection("business")
                      .add({
                        uid: uid,
                        image: url,
                        companyName: companyName,
                        telNumber: telNumber,
                        cellNumber: cellNumber,
                        emailAddress: emailAddress,
                        mainCategory: mainCategory,
                        likes: [],
                        facebookLink: "",
                        instagramLink: "",
                        linkedInLink: "",
                        description: "",
                        weekdaysHours: weekdaysHours,
                        holidaysHours: holidaysHours,
                        poBox: poBox,
                        websiteLink: websiteLink,
                        postedAt: firebase.firestore.Timestamp.fromDate(
                          new Date()
                        ),
                        updatedAt: firebase.firestore.Timestamp.fromDate(
                          new Date()
                        ),
                      })
                      .then((response) => {
                        setCompanyName("");
                        setTelNumber("");
                        setCellNumber("");
                        setEmailAddress("");
                        setMainCategory();
                        setWeekdaysHours("");
                        setHolidaysHours("");
                        setPoBox("");
                        setWebsiteLink("");
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
                    setMessage(error);
                    setAlert(true);
                  });
              })
              .catch((error) => {
                setLoading(false);
                setMessage(error);
                setAlert(true);
              });
          })
          .catch((error) => {
            setLoading(false);
            setMessage(error);
            setAlert(true);
          });
      } else {
        setLoading(false);
        setMessage("Please choose logo.");
        setAlert(true);
      }
    } else {
      setLoading(false);
      setMessage(
        "Company Name & Category are required to register your organisation."
      );
      setAlert(true);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 2, textAlign: "center" }}>
      <Typography variant="h4" color="initial">
        Add Your Organisation To The Listings
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Please enter all require details about the organisation
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}
      >
        <Grid
          item
          container
          direction="column"
          md={6}
          xs={12}
          alignItems="center"
        >
          {logo ? (
            <Avatar
              sx={{
                mt: 3,
                height: 200,
                bgcolor: "warning",
                width: "100%",
              }}
              src={URL.createObjectURL(logo).toString()}
              variant="square"
            />
          ) : (
            <Avatar
              variant="square"
              sx={{
                mt: 3,
                height: 200,
                bgcolor: "warning",
                width: "100%",
              }}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            component="label"
            size="small"
            sx={{ my: 2 }}
          >
            Change Cover Image
            <input
              type="file"
              hidden
              multiple
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            id="company_name"
            label="Company Name"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            id="main_category"
            label="Main Category"
            type="text"
            value={mainCategory}
            onChange={(e) => setMainCategory(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
            select
          >
            {categories.map((category) => (
              <MenuItem value={category.main} key={category.main}>
                {category.main}
              </MenuItem>
            ))}
          </TextField>

          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <TextField
                id="tel_number"
                label="Telephone Number"
                type="tel"
                value={telNumber}
                onChange={(e) => setTelNumber(e.target.value)}
                margin="normal"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="cell_number"
                label="Cell Number"
                type="tel"
                value={cellNumber}
                onChange={(e) => setCellNumber(e.target.value)}
                margin="normal"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <TextField
            id="email_address"
            label="Email Address"
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            id="website_link"
            label="Website Link"
            type="url"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <TextField
            id="po_box"
            label="P.O. BOX"
            type="text"
            value={poBox}
            onChange={(e) => setPoBox(e.target.value)}
            margin="normal"
            fullWidth
            size="small"
          />
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <TextField
                id="weekdays"
                label="08:00 - 17:00"
                helperText="Working hours on Weekdays"
                text="text"
                value={weekdaysHours}
                onChange={(e) => setWeekdaysHours(e.target.value)}
                margin="normal"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="holidays"
                helperText="Working hours on holidays"
                label="09:00 - 13:00"
                type="text"
                value={holidaysHours}
                onChange={(e) => setHolidaysHours(e.target.value)}
                margin="normal"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LoadingButton
        variant="contained"
        loading={loading}
        color="secondary"
        fullWidth
        onClick={() => addOrganisation()}
      >
        Register New Organisation
      </LoadingButton>
      <AlertDialog alert={alert} setAlert={setAlert} message={message} />
    </Container>
  );
};

export default AddOrganisationPage;
