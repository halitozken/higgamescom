import React, { useCallback, useEffect, useState } from "react";
import "./content.style.css";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Link, Navigate, useLocation } from "react-router-dom";
import Image from "../Image/Image";
import { categoryItems } from "../Category/categoryItems";
import { UseFetch, UseFetchByCategory } from "../../useFetch";

const Content = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const search = location.search;
  const [parameters, setParameters] = useSearchParams();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const category = params.get("category");
  const page = parseInt(params.get("page"), 10) || 1;

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const fetchGames = async () => {
      if (category !== null && page !== null) {
        const categoryName = categoryItems.find(
          (item) => item.categoryName === category
        );

        const categoryId = categoryName.id;
        const number = "50";

        setGames(await UseFetchByCategory(categoryId, number, page));
      } else {
        const number = "50";
        setGames(await UseFetch(number, page));
      }
    };

    fetchGames();
  }, [category, page]);

  return (
    <main>
      <article className="content">
        <div className="game-area">
          {games &&
            games.map((game) => (
              <div className="game-card" key={game.id}>
                <Link to={`/${game.id}`}>
                  <img
                    className="image"
                    src={game.thumb}
                    alt={game.title}
                    width={100}
                    height={100}
                  />
                  <h3 className="game-title">{game.title}</h3>
                </Link>
              </div>
            ))}
        </div>
        <div className="button-area">
          <button
            className="button"
            style={{ display: page === 1 ? "none" : "inline" }}
            onClick={() => {
              navigate(pathname + "?" + createQueryString("page", page - 1));
            }}
          >
            Previous
          </button>

          <button
            className="button"
            style={{ display: games.length <= 0 ? "none" : "inline" }}
            onClick={() => {
              search === ""
                ? navigate(pathname + "?category=all&page=2")
                : navigate(
                    pathname + "?" + createQueryString("page", page + 1)
                  );
            }}
          >
            Next
          </button>
        </div>
      </article>
    </main>
  );
};

export default Content;
