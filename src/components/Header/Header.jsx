import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";

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
      <div className="logo">
        <Link to="/">Hig Games</Link>
      </div>
      <div className="sub-text">Explore Endless Gaming Adventures</div>
    </div>
  );
};

export default Header;
