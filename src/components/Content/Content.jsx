import React, { useEffect } from "react";
import "./content.style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "../../stores/game";
import { fetchGames } from "../../services";
import { increment, decrement } from "../../stores/page";
import { Link } from "react-router-dom";
import slugify from "slugify";

const Content = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.game);
  const page = useSelector((state) => state.page.page);
  const category = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(fetchGames({ page, category }));
  }, [page, category]);

  const handleGame = (game) => {
    dispatch(selectGame(game));
  };

  return (
    <section>
      <div className="content">
        <div className="game-area">
          {games &&
            games.map((game) => (
              <div
                className="game-card"
                key={game.Md5}
                onClick={() => handleGame(game)}
              >
                <Link
                  to={`/games/${slugify(game.Title, {
                    replacement: "-",
                    lower: true,
                  })}`}
                >
                  <img className="image" src={game.Asset[0]} alt={game.Title} />
                </Link>
              </div>
            ))}
        </div>
        <div className="button-area">
          <button
            className="button"
            onClick={() => (page >= 1 ? dispatch(decrement()) : null)}
            style={{ display: page === 1 ? "none" : "inline" }}
          >
            Previous
          </button>
          <button
            className="button"
            onClick={() => dispatch(increment())}
            style={{ display: games.length <= 0 ? "none" : "inline" }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
