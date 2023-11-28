import React from "react";
import Header from "../components/Header/Header";
import GameContent from "../components/GameContent/GameContent";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Game = () => {
  const selectedGame = useSelector((state) => state.game.selectedGame);
  const params = useParams();
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Hig Games - {selectedGame.Title}</title>
        <meta name="description" content={selectedGame.Description} />
        <link rel="canonical" href={`https://higgames.com/game`} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186709846298354"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <GameContent selectedGame={selectedGame} params={params} />
      <Footer />
    </>
  );
};

export default Game;
