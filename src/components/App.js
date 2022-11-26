import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    </>
  );
};

export default App;
