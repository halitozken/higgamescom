import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
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
      <h1 className="logo">
        <Link to="/">Hig Games</Link>
      </h1>
      <h2 className="sub-text">Explore Endless Gaming Adventures</h2>
    </header>
  );
};

export default Header;
