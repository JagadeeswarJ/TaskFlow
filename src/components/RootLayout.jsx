import React from "react";
import Header from "./Navbar";
import TodoApp from "./todoPage/TodoMain";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
