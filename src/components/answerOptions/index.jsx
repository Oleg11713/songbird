import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  setIsCorrectCurrentBird,
  setIsLevelCompleted,
  setScoreOnTheLevel,
  setSelectedBird,
  setTotalScore,
} from "../../redux/actions";
import lostSound from "../../sounds/lost.mp3";
import wonSound from "../../sounds/won.mp3";
import {
    selectIsLevelCompleted,
    selectScoreOnTheLevel,
} from "../../redux/selectors";

import "./styles.scss";

const AnswerOptions = ({
  birds,
  currentBird,
  isLevelCompleted,
  scoreOnTheLevel,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="answer-options">
      <ul className="answers-group">
        {birds.map((bird) => (
          <li
            key={bird.name}
            className="answers-item"
            onClick={() => {
              dispatch(setSelectedBird(bird));
              const click = document.querySelector(`#${bird.name}`);
              if (!isLevelCompleted) {
                if (bird.name === currentBird.name) {
                  click.classList.add("won");
                  const sound = new Audio(wonSound);
                  sound.volume = 0.1;
                  sound.play();
                  dispatch(setIsCorrectCurrentBird(true));
                  dispatch(setIsLevelCompleted(true));
                  dispatch(setTotalScore(scoreOnTheLevel));
                  dispatch(setScoreOnTheLevel(5));
                } else {
                  click.classList.remove("won");
                  if (!click.classList.contains("lost")) {
                    const sound = new Audio(lostSound);
                    sound.volume = 0.1;
                    sound.play();
                    dispatch(setScoreOnTheLevel(scoreOnTheLevel - 1));
                  }
                  click.classList.add("lost");
                }
              }
            }}
          >
            <span id={bird.name} className={`circle`} />
            {bird.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLevelCompleted: selectIsLevelCompleted,
    scoreOnTheLevel: selectScoreOnTheLevel,
  });

export default connect(mapStateToProps)(AnswerOptions);
