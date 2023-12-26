import React, { useEffect } from "react";
import "./content.style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "../../stores/game";
import { fetchGames } from "../../services";
import { Link, Navigate, useLocation } from "react-router-dom";
import Image from "../Image/Image";

const Content = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.game);

  const page = useLocation().pathname.split("/")[2];
  const category = useLocation().pathname.split("/")[1];

  useEffect(() => {
    dispatch(fetchGames({ page, category }));
  }, [page, category]);

  const handleGame = (game) => {
    dispatch(selectGame(game));
  };

  return (
    <main>
      <article className="content">
        <div className="game-area">
          {games === undefined ? (
            <Navigate to="/All/1" />
          ) : (
            games.map((game) => (
              <div
                className="game-card"
                key={game.Md5}
                onClick={() => handleGame(game)}
              >
                <Link to={`/games/${game.Md5}`}>
                  <Image game={game} />
                </Link>
                <h2 className="game-title">{game.Title}</h2>
              </div>
            ))
          )}
        </div>
        <div className="button-area">
          <Link
            to={
              page === undefined
                ? `/All/${2}`
                : `/${category}/${Number(page) - 1}`
            }
          >
            <button
              className="button"
              style={{
                display:
                  Number(page) === 1 || page === undefined ? "none" : "inline",
              }}
            >
              Previous
            </button>
          </Link>
          <Link
            to={
              page === undefined
                ? `/All/${2}`
                : `/${category}/${Number(page) + 1}`
            }
          >
            <button
              className="button"
              style={{ display: games.length <= 0 ? "none" : "inline" }}
            >
              Next
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Content;
