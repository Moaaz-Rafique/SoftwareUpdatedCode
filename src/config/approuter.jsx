import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../screens/About";
import CommentsForm from "../screens/CommentsForm";
import Dashboard from "../screens/Dashboard";
import ErrorPage from "../screens/ErrorPage";
import InstituteDashboard from "../screens/InstituteDashboard";
import Login from "../screens/Login";
import Posts from "../screens/Posts";
import SignUp from "../screens/SignUp";
import SinglePost from "../screens/SinglePost";
import AdminDashboard from "../AdminDashboard";
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
