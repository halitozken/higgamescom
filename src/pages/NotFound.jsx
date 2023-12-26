import React from "react";
import "./notfound.style.css";
import Header from "../components/Header/Header";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const path = useLocation().pathname;

  return (
    <div className="main">
      <Header />
      <div className="text">
        Not Found This Path
        <div className="path"> {path}</div>
        <button className="button">
          <Link to={"/All/1"}>Go Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
