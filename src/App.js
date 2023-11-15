import React from "react";

import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Content from "./components/Content/Content";
import "./app.style.css";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <title>Hig Games - Explore Endless Gaming Adventures</title>
        <meta
          name="description"
          content="Unlock the exciting and diverse universe of free online games! Explore the latest and most popular free online games on our website, test your skills by playing competitive games, interact with the community, and stay updated with the latest gaming news. Create your own gaming experience and find your place in this fun world."
        />
        <link rel="canonical" href="http://higgames.com/" />
      </Helmet>
      <Header />
      <Category />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
