import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Timeline from "./pages/Timeline";

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
