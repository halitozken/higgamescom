import React from "react";

import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Content from "./components/Content/Content";
import "./app.style.css";

import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import MobileCategory from "./components/MobileCategory/MobileCategory";

function App() {
  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <title>Hig Games - Explore Endless Gaming Adventures</title>
        <meta
          name="description"
          content="Unlock the exciting universe of free online games! Explore the most popular free online games. Create your own gaming experience and find your place in this fun world."
        />
        <meta
          name="keywords"
          content="oyun, oyunlar, ücretsiz oyunlar, oyunu, oyun oyna, iki kişilik oyunlar, online game, online games, flash game, flash games"
        />
        <link rel="canonical" href="https://higgames.com/" />
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
