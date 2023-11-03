import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Routing from "../Component/routes/Routing";
import ResponsiveHeader from "../Component/Header/ResponsiveHeader";

const Layout = () => {
  return (
    <div>
      <ResponsiveHeader />
      <Routing />
      <Footer />
    </div>
  );
};

export default Layout;
