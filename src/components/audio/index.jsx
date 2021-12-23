import React from "react";

import "./styles.scss";

const AudioPlayer = ({ audio }) => (
  <div className="audio-bar">
    <audio className="audio" controls src={`${audio}`} />
  </div>
);

export default AudioPlayer;
