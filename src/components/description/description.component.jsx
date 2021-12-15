import React from "react";

import "./description.styles.scss";
import Audio from "../audio/audio.component";

const Description = ({ birds }) => (
  <div className="description">
    <div className="bird-info">
      <img src={`${birds.image}`} className="image" alt="bird" />
      <div className="name-species-audio">
        <h3 className="name">{birds.name}</h3>
        <h4 className="species">{birds.species}</h4>
        <Audio audio={birds.audio} />
        <div className="audio"></div>
      </div>
    </div>
    <p className="bird-description">{birds.description}</p>
  </div>
);

export default Description;
