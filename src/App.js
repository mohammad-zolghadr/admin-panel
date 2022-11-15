import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Home from "./components/Home";
import Navbar from "./components/Admin/Navbar";
import Info from "./components/Admin/Info";
import Login from "./components/Admin/Login";
import Dashboard from "./components/Admin/Dashboard";
import Posts from "./components/Admin/Posts";
import Users from "./components/Admin/Users";
import NotFound from "./components/Admin/NotFound";

const App = () => {
  return (
    <div className="font-nf">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="info" element={<Info />} />
          <Route path="users" element={<Users />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
