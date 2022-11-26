import React from "react";
import Header from "../header/Header";

import Footer from "../footer/Footer";
import { Divider } from "@mui/material";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Divider />
      <div style={{ height: "100vh" }}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
