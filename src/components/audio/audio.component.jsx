import React from "react";

import "./audio.styles.scss";

const Audio = ({ audio }) => (
  <div className="audio-bar">
    <audio className='audio' controls src={`${audio}`} />
  </div>
);

export default Audio;
