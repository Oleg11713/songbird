import React from "react";

import "./currentQuestion.styles.scss";
import Audio from "../audio/audio.component";
import { useSelector } from "react-redux";
import startBird from '../../assets/startBird.jpg'

const CurrentQuestion = ({ image, name, audio }) => {
  const selectedBird = useSelector((state) => state.selectedBird);
  const selectedBirdExist = useSelector((state) => state.selectedBirdExist);

  return (
    <div className="current-question">
      <img
        src={`${
          selectedBirdExist
            ? selectedBird.name === name
              ? image
              : startBird
            : startBird
        }`}
        className="bird-image"
        alt="bird"
      />
      <div className="bird-info">
        <h2 className="name">
          {`${
            selectedBirdExist
              ? selectedBird.name === name
                ? name
                : "******"
              : "******"
          }`}
        </h2>
        <Audio audio={audio} />
      </div>
    </div>
  );
};

export default CurrentQuestion;
