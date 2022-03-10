import React from "react";

//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage.jsx";
import AddOrganisationPage from "./pages/AddOrganisationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/add_organisation"
          element={<AddOrganisationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
