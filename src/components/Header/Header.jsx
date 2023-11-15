import React from "react";
import "./header.style.css";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        width: "100%",
        height: "8vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(43, 34, 53, 0.49)",
        cursor: "pointer",
      }}
    >
      <div className="logo">Hig Games</div>
      <div className="sub-text">Explore Endless Gaming Adventures</div>
    </div>
  );
};

export default Header;
