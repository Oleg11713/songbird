import React from "react";

import "./currentQuestion.styles.scss";
import Audio from "../audio/audio.component";

const CurrentQuestion = ({ image, name, audio }) => (
  <div className="current-question">
    <div className="bird-image-container">
      <img
        src={`${image}`}
        className="bird-image"
        alt="bird"
      />
    </div>
    <div className="bird-info">
      <h2 className="name">{`${true ? '******' : name}`}</h2>
        <Audio audio={audio}/>
    </div>
  </div>
);

export default CurrentQuestion;
