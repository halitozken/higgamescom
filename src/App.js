import React from "react";

import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Content from "./components/Content/Content";
import "./app.style.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <title>anasayfa</title>
      </Helmet>
      <Header />
      <Category />
      <Content />
    </main>
  );
}

export default App;
