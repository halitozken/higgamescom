import React, { useEffect } from "react";
import "./content.style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "../../stores/game";
import { fetchGames } from "../../services";

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
      <div className="container">
        <div className="game-area">
          {games &&
            games.map((game) => (
              <div
                className="game-card"
                key={game.Md5}
                onClick={() => handleGame(game)}
              >
                <img className="image" src={game.Asset[0]} alt={game.Title} />
              </div>
            ))}
        </div>
        <div className="button-area">
          <button className="button">Previous</button>
          <button className="button">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Content;
