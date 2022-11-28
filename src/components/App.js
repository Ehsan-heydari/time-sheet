import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../pages/home/Home";
import Leave from "../pages/leave/Leave";
import Layout from "./Layout/Layout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/leave" element={<Leave />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
