import React from "react";
import "./header.style.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../stores/category";

const Header = () => {
  const isOpen = useSelector((state) => state.screen.isOpen);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "100%",
        height: "7vh",
        display: isOpen === true ? "none" : "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(43, 34, 53, 0.49)",
        cursor: "pointer",
      }}
      onClick={() => dispatch(changeCategory("All"))}
    >
      <div className="logo">
        {/* <Link href="/">Hig Games</Link> */}
        Hig Games
      </div>
      <div className="subText">Explore Endless Gaming Adventures</div>
    </div>
  );
};

export default Header;
