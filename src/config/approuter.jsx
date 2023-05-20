import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import ErrorPage from "../screens/ErrorPage";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import AddNote from "../screens/AddNote";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/AddNote" element={<AddNote />} />
        <Route path="/" element={<AddNote />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
