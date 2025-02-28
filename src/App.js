import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import MessiProfile from "./pages/MessiProfile";
import RonaldoProfile from "./pages/RonaldoProfile";
import SerenaProfile from "./pages/SerenaProfile";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";
import Messaging from "./pages/Messaging";
import HomePage from "./components/HomePage";
import Network from "./components/Network";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/MessiProfile" element={<MessiProfile />} />
        <Route path="/RonaldoProfile" element={<RonaldoProfile />} />
        <Route path="/SerenaProfile" element={<SerenaProfile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </Router>
  );
};

export default App;
