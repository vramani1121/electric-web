import React, { useState, useEffect } from "react";
// import "../../../my-app/src/App.css";
import "./Circle.css";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (

    <div
     
    >
      <div className="cursor dot"
      style={{
          position: "fixed",
        top: position.y -8,
        left: position.x -10,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}></div>
    </div>
  );
};

export default Circle;
