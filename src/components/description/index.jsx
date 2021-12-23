import React from "react";
import { useSelector } from "react-redux";

import AudioPlayer from "../audio";

import "./styles.scss";

const Description = () => {
  const selectedBird = useSelector((state) => state.selectedBird);
  const levelCompleted = useSelector((state) => state.levelCompleted);
  const selectedBirdExist = useSelector((state) => state.selectedBirdExist);

  return (
    <div
      className="description"
      onClick={() => {
        console.log(selectedBird);
        console.log(levelCompleted);
      }}
    >
      {selectedBirdExist ? (
        selectedBird ? (
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
        )
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
