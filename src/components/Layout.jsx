import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div>
      <div className="page-layout">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
