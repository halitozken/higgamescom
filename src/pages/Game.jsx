import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import GameContent from "../components/GameContent/GameContent";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { UseFetchById } from "../useFetch";

const Game = () => {
  const id = useParams().id;
  const [game, setGame] = useState([]);


  useEffect(() => {
    const fetchGame = async () => {
      setGame(await UseFetchById(id));
    };

    fetchGame();
  }, []);

  return (
    <main>
      {game &&
        game.map((item) => (
          <Helmet key={item.id}>
            <meta charset="utf-8" />
            <title>{item.title.toUpperCase()} - Hig Games</title>
            <meta name="description" content={item.description} />
            <meta name="keywords" content={item.tags} />
            <link rel="canonical" href={`https://higgames.com/${item.id}`} />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186709846298354"
              crossorigin="anonymous"
            ></script>
          </Helmet>
        ))}
      <Header />
      {game && game.map((item) => <GameContent key={item.id} item={item} />)}
      <Footer />
    </main>
  );
};

export default Game;
