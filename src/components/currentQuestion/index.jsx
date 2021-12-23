import React from "react";
import { useSelector } from "react-redux";

import Audio from "../audio";
import startBird from "../../assets/startBird.jpg";

import "./styles.scss";

const CurrentQuestion = ({ image, name, audio }) => {
  const selectedBird = useSelector((state) => state.selectedBird);
  const selectedBirdExist = useSelector((state) => state.selectedBirdExist);
  const correctCurrentBird = useSelector((state) => state.correctCurrentBird);

  return (
    <div className="current-question">
      <img
        src={`${
          correctCurrentBird
            ? image
            : selectedBirdExist
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
            correctCurrentBird
              ? name
              : selectedBirdExist
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
