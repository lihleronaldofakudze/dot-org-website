import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0gJU6Uzc2INYQNAFCqSesFZACVG96s70",
  authDomain: "dotorg-e834d.firebaseapp.com",
  projectId: "dotorg-e834d",
  storageBucket: "dotorg-e834d.appspot.com",
  messagingSenderId: "682843615667",
  appId: "1:682843615667:web:2a72ab02e1c23e88f7dbc6",
  measurementId: "G-WZ6F6K4XKW",
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.storage();
firebase.firestore();

export default firebase;
