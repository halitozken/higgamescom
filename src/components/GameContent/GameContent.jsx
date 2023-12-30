import React from "react";
import "./gamecontent.style.css";

const GameContent = ({ item }) => {
  return (
    <section className="content">
      {/* <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
          margin: "2%",
        }}
      >
        {item.title}
      </h3> */}
      <div className="iframe">
        <iframe
          style={{ width: "100%", height: "100%" }}
          src={item.url}
          frameBorder={0}
          allowFullScreen
          loading="lazy"
          title={item.title}
        />
      </div>

      <div className="wrapper">
        <div className="desc">
          Description: <br />
          {item.description}
        </div>
        <div className="inst">
          Instructions: <br />
          {item.instructions}
        </div>
      </div>
    </section>
  );
};

export default GameContent;
