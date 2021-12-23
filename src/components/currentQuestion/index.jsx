import React from "react";
import { useSelector } from "react-redux";

import AudioPlayer from "../audio";
import startBirdImage from "../../assets/startBird.jpg";

import "./styles.scss";

const CurrentQuestion = ({ image, name, audio }) => {
  const START_NAME_OF_THE_HIDDEN_BIRD = "******";

  const selectedBird = useSelector((state) => state.selectedBird);
  const isCorrectCurrentBird = useSelector(
    (state) => state.isCorrectCurrentBird
  );

  const imageIfSelectedBirdExist = selectedBird
    ? selectedBird.name === name
      ? image
      : startBirdImage
    : startBirdImage;

  const nameIfSelectedBirdExist = selectedBird
    ? selectedBird.name === name
      ? name
      : START_NAME_OF_THE_HIDDEN_BIRD
    : START_NAME_OF_THE_HIDDEN_BIRD;

  return (
    <div className="current-question">
      <img
        src={`${isCorrectCurrentBird ? image : imageIfSelectedBirdExist}`}
        className="bird-image"
        alt="bird"
      />
      <div className="bird-info">
        <h2 className="name">
          {`${isCorrectCurrentBird ? name : nameIfSelectedBirdExist}`}
        </h2>
        <AudioPlayer audio={audio} />
      </div>
    </div>
  );
};

export default CurrentQuestion;
