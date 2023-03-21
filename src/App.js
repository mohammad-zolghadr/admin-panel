import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";
import Info from "./components/Admin/Info";
import Login from "./components/Admin/Login";
import Dashboard from "./components/Admin/Dashboard";
import Posts from "./components/Admin/Posts";
import NotFound from "./components/Admin/NotFound";
import PostsNewContent from "./components/Admin/Posts_NewContent";
import PostsListOfPosts from "./components/Admin/Posts_ListOfPosts";

const App = () => {
  return (
    <div className="font-nf">
      <ToastContainer position="bottom-left" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="posts/*" element={<Posts />}>
            <Route path="*" element={<Navigate to="new-content" />} />
            <Route path="new-content" element={<PostsNewContent />} />
            <Route path="list-of-posts" element={<PostsListOfPosts />} />
          </Route>
          <Route path="info" element={<Info />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
