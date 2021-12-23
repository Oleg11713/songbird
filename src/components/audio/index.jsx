import React from "react";

import "./styles.scss";

const Audio = ({ audio }) => (
  <div className="audio-bar">
    <audio className="audio" controls src={`${audio}`} />
  </div>
);

export default Audio;
