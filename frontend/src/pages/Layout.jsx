import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const Layout = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
