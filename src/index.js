import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Firebase
import LoadingPage from "./pages/LoadingPage";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { Provider, useSelector } from "react-redux";
import rootReducer from "./services/reducer";
import firebase from "./services/firebase";
import { createStore } from "redux";

//Material Theme
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  },
  palette: {
    primary: {
      main: "#0B0F10",
      light: "#1C1D22",
      dark: "#131519",
      constrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      constrastText: "#0B0F10",
    },
  },
});
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <LoadingPage />;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
