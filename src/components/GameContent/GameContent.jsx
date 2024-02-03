import React, { useState } from "react";
import "./gamecontent.style.css";

const GameContent = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="content">
      <h3 className="title">{item.title}</h3>
      <div
        className="iframe"
        style={{
          width: isModalOpen ? null : "70vw",
          position: isModalOpen ? "fixed" : null,
          top: isModalOpen ? "0" : null,
          bottom: isModalOpen ? "0" : null,
          right: isModalOpen ? "0" : null,
          left: isModalOpen ? "0" : null,
        }}
      >
        <button
          className="fullscreen"
          style={{
            position: isModalOpen ? "absolute" : null,
            width: isModalOpen ? "auto" : null,
            backgroundColor: isModalOpen
              ? "rgb(255, 0, 0)"
              : "rgb(216, 116, 116)",
          }}
          onClick={handleModal}
        >
          {isModalOpen ? "Exit" : "Play Full Screen"}
        </button>
        <div className="modal">
          <iframe
            style={{
              width: isModalOpen ? "100vw" : "100%",
              height: isModalOpen ? "100vh" : "75vh",
              margin: "auto",
              marginBottom: "7%",
            }}
            src={item.url}
            frameborder={0}
            allowFullScreen
            allow="fullscreen"
            loading="lazy"
            title={item.title}
          />
        </div>
      </div>
    </section>
  );
};

export default GameContent;
