import React from "react";

import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Content from "./components/Content/Content";
import "./app.style.css";

function App() {
  return (
    <main>
      <Header />
      <Category />
      <Content />
    </main>
  );
}

export default App;
