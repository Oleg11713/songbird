import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setIsCorrectCurrentBird,
  setIsLevelCompleted,
  setScoreOnTheLevel,
  setSelectedBird,
  setTotalScore,
} from "../../redux/actions";
import lostSound from "../../sounds/lost.mp3";
import wonSound from "../../sounds/won.mp3";

import "./styles.scss";

const AnswerOptions = ({ birds, currentBird }) => {
  const dispatch = useDispatch();
  const isLevelCompleted = useSelector((state) => state.isLevelCompleted);
  const scoreOnTheLevel = useSelector((state) => state.scoreOnTheLevel);

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
                  new Audio(wonSound).play();
                  dispatch(setIsCorrectCurrentBird(true));
                  dispatch(setIsLevelCompleted(true));
                  dispatch(setTotalScore(scoreOnTheLevel));
                  dispatch(setScoreOnTheLevel(5));
                } else {
                  click.classList.remove("won");
                  if (!click.classList.contains("lost")) {
                    new Audio(lostSound).play();
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

export default AnswerOptions;
