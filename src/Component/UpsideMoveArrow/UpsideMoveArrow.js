import style from "./UpsideMoveArrow.module.css";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const UpsideMoveArrow = () => {
  // return <div className={style.arrowWrapper}></div>;
  const [IsVisible, setIsVisible] = useState(false);
  const go = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenscroll = () => {
    let heightToHidden = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenscroll);
  }, []);
  return (
    <>
      {IsVisible && (
        <div className={style.topBtn} onClick={go}>
          <FaArrowUp className={style.topBtnIcon} />
        </div>
      )}
    </>
  );
};

export default UpsideMoveArrow;
