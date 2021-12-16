import React from "react";
import { connect } from "react-redux";

import "./description.styles.scss";
import Audio from "../audio/audio.component";
import { INITIAL_STATE as state } from "../../redux/state";

const Description = ({ selectedBird }) => (
  <div className="description" onClick={() => console.log(selectedBird)}>
    {selectedBird != null ? (
      <div className="bird-description">
        <div className="bird-info">
          <img src={`${selectedBird.image}`} className="image" alt="bird" />
          <div className="name-species-audio">
            <h3 className="name">{selectedBird.name}</h3>
            <h4 className="species">{selectedBird.species}</h4>
            <Audio audio={selectedBird.audio} />
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
    )}
  </div>
);

const mapStateToProps = () => ({
  selectedBird: state.selectedBird,
});

export default connect(mapStateToProps)(Description);
