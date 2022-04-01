import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import BannerForm from "./components/Main/BannerForm";
import SignUp from "./components/Auth/SignUp";
import AuthForm from "./components/Auth/AuthForm";
import AuthFormIn from "./components/Auth/AuthFormIn";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";

import "react-toastify/dist/ReactToastify.css";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4 m-4 d-flex justify-content-center align-items-center h-100 animate__animated animate__tada">
        <Routes>
          <Route path="/" element={<BannerForm />}></Route>
          <Route path="/api/home/:id" element={<Home />}></Route>
          <Route path="/api/auth/signup" element={<AuthForm />}></Route>
          <Route path="/edit/profile/:id" element={<AuthForm />}></Route>
          <Route path="/api/auth/signin" element={<AuthFormIn />}></Route>
          <Route path="/api/profile" element={<Profile />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
