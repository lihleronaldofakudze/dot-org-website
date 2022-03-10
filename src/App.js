import React from "react";

//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage.jsx";
import AddOrganisationPage from "./pages/AddOrganisationPage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";

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
        <Route exact path="/notifications" element={<NotificationsPage />} />
        <Route exact path="/messages" element={<MessagesPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
