import React from "react";
import "./App.css";
import User from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/addUser" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
