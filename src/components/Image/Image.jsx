import React, { useEffect, useState } from "react";
import "./image.style.css";

const Image = ({ game }) => {
  const [url, setUrl] = useState();

  const urlArray = game.Asset;

  const findResolution = (urlArray) => {
    urlArray.map((element) => {
      element.includes("200x120") ? setUrl(element) : setUrl(urlArray[0]);
    });
  };

  useEffect(() => {
    findResolution(urlArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <img
      className="image"
      src={url}
      alt={`${game.Title} - Hig Games - Free Online Games`}
    />
  );
};

export default Image;
