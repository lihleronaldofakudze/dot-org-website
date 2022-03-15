import React from "react";

//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component
import NavbarComponent from "./components/NavbarComponent.jsx";

//Pages
import HomePage from "./pages/HomePage.jsx";
import AddOrganisationPage from "./pages/AddOrganisationPage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent>
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
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </NavbarComponent>
    </BrowserRouter>
  );
};

export default App;
