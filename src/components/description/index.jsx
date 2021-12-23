import React from "react";
import { useSelector } from "react-redux";

import AudioPlayer from "../audio";

import "./styles.scss";

const Description = () => {
  const selectedBird = useSelector((state) => state.selectedBird);

  return (
    <div
      className="description"
    >
      {selectedBird ? (
        <div className="bird-description">
          <div className="bird-info">
            <img src={`${selectedBird.image}`} className="image" alt="bird" />
            <div className="name-species-audio">
              <h3 className="name">{selectedBird.name}</h3>
              <h4 className="species">{selectedBird.species}</h4>
              <AudioPlayer audio={selectedBird.audio} />
            </div>
          </div>
          <p className="bird-description">{selectedBird.description}</p>
        </div>
      ) : (
        <p>
          Послушайте плеер.
          <br />
          Выберите птицу из списка
        </p>
      )}
    </div>
  );
};

export default Description;
