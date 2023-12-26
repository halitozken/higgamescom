import React from "react";
import "./gamecontent.style.css";

import { useRef } from "react";

const GameContent = ({ selectedGame, params }) => {
  const gameUrl = `https://html5.gamedistribution.com/${params.Md5}/?gd_sdk_referrer_url=https://www.higgames.com/games/${params.Md5}`;

  const windowWidth = useRef(window.innerWidth).current;

  return (
    <main>
      {/* <h2
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
      </h2> */}
      <section
        style={{
          width: windowWidth <= 600 ? "100vw" : "60vw",
          height: "100vh",
          margin: "auto",
        }}
      >
        <iframe
          src={gameUrl}
          title={selectedGame.Title}
          frameBorder={0}
          allowfullscreen={true}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "100%",
            height: "100%",
          }}
        />
      </section>
    </main>
  );
};

export default GameContent;
