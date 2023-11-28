import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";

import MobileCategory from "../components/MobileCategory/MobileCategory";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Category from "../components/Category/Category";
import { useLocation } from "react-router-dom";

const GamesByCategoryAndPage = () => {
  const page = useLocation().pathname.split("/")[2];
  const category = useLocation().pathname.split("/")[1];

  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Hig Games - {category} - Explore Endless Gaming Adventures
        </title>
        <meta
          name="description"
          content="Unlock the exciting universe of free online games! Explore the most popular free online games. Create your own gaming experience and find your place in this fun world."
        />
        <link
          rel="canonical"
          href={`https://higgames.com/${category}/${Number(page)}`}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186709846298354"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <Category />
      <MobileCategory />
      <Content />
      <Footer />
    </main>
  );
};

export default GamesByCategoryAndPage;
