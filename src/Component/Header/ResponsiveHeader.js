import React from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import style from "./ResponsiveHeader.module.css";

const ResponsiveHeader = () => {
  return (
    <div>
      <Header />
      <div className={style.mobileView}>
        <MobileHeader />
      </div>
    </div>
  );
};

export default ResponsiveHeader;
