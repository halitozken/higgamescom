import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./gamecontent.style.css";
import { setIsOpen } from "../../stores/screen";
// import { useRef } from "react";

const GameContent = () => {
  const selectedGame = useSelector((state) => state.game.selectedGame);
  const isOpen = useSelector((state) => state.screen.isOpen);
  const dispatch = useDispatch();

  const gameUrl =
    selectedGame.Url + `?gd_sdk_referrer_url=https://www.higgames.com/games/`;

  // const windowWidth = useRef(window.innerWidth);
  // const windowHeight = useRef(window.innerHeight);

  // console.log(params.id);

  return (
    <section>
      <h1
        style={{
          display: isOpen === true ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
          margin: "2%",
        }}
      >
        {selectedGame.Title}
      </h1>
      <div
        style={{
          width: isOpen ? "100vw" : "75vw",
          height: isOpen ? "100vh" : "75vh",
          margin: "auto",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            right: "0",
            zIndex: "2",
            width: "100px",
            height: "35px",
            border: "none",
            fontWeight: "bold",
            backgroundColor: "orangered",
            color: "white",
          }}
          onClick={() => dispatch(setIsOpen())}
        >
          {isOpen === true ? "Exit" : "Full Screen"}
        </button>
        <iframe
          src={gameUrl}
          frameBorder={0}
          allowfullscreen
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "2%",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>

      <div className="wrapper">
        <div className="desc">
          <h3>Description: </h3>
          {selectedGame.Description}
        </div>
        <div className="inst">
          <h3>Instructions: </h3>
          {selectedGame.Instructions}
        </div>
      </div>
    </section>
  );
};

export default GameContent;
