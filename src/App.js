import React from "react";

import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Content from "./components/Content/Content";
import "./app.style.css";

import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useLocation, useSearchParams } from "react-router-dom";
import MobileCategory from "./components/MobileCategory/MobileCategory";

function App() {
  const search = useLocation().search;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const category = params.get("category");

  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Hig Games -
          {category === null
            ? "All"
            : category.charAt(0).toUpperCase() + category.slice(1)}
          - Free Online Games - Explore Endless Gaming Adventures
        </title>
        <meta
          name="description"
          content="Unlock the exciting universe of free online games! Explore the most popular free online games. Create your own gaming experience and find your place in this fun world."
        />
        <meta
          name="keywords"
          content="oyun, oyunlar, ücretsiz oyunlar, oyunu, oyun oyna, iki kişilik oyunlar, online game, online games, flash game, flash games"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186709846298354"
          crossorigin="anonymous"
        ></script>
        <link
          rel="canonical"
          href={
            search === ""
              ? `https://higgames.com/`
              : `https://higgames.com/games${search}`
          }
        />
      </Helmet>
      <Header />
      <Category />
      <MobileCategory />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
