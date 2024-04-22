import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
