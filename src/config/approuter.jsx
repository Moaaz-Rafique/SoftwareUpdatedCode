import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import ErrorPage from "../screens/ErrorPage";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import AddNote from "../screens/AddNote";
import Profile from "../screens/Profile"
// import Navbar from "../components/NavBar"

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/AddNote" element={<AddNote />} />
          <Route path="/" element={<AddNote />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
