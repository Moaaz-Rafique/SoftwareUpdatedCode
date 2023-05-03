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

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="admin/*" element={<AdminDashboard />} />
          <Route path="institute/*" element={<InstituteDashboard />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform:/id" element={<CommentsForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
