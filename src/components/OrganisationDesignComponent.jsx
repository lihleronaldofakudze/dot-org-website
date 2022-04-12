import * as React from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Firebase
import { useSelector } from "react-redux";
import { useFirebase, useFirestore } from "react-redux-firebase";

// Material Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const OrganisationDesignComponent = ({ business }) => {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();
  const firestore = useFirestore();
  const navigate = useNavigate();

  const changePage = (page) => {
    navigate(page);
  };

  const like = () => {
    if (auth.uid) {
      if (business.likes.includes(auth.uid)) {
        firestore
          .collection("posts")
          .doc(business.id)
          .update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.uid),
          });
      } else {
        firestore
          .collection("posts")
          .doc(business.id)
          .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.uid),
          });
      }
    } else {
      alert("Please login to like");
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={business.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {business.companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {business.mainCategory}
          <br /> Cell Number: {business.cellNumber}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={() => changePage(`/business/${business.id}`)}
        >
          View Info
        </Button>

        <IconButton aria-label="like" onClick={like}>
          {business.likes.includes(auth.uid) ? (
            <FavoriteIcon style={{ color: "#FF0000" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OrganisationDesignComponent;
