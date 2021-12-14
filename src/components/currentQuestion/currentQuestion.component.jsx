import React from "react";

import "./currentQuestion.styles.scss";

const CurrentQuestion = ({ image, name, audio }) => (
  <div className="current-question">
    <div className="bird-image-container">
      <img
        src="https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg"
        className="bird-image"
        alt="image"
      />
    </div>
    <div className="bird-info">
      <h3 className="name">******</h3>
    </div>
  </div>
);

export default CurrentQuestion;
