import React from "react";

import "./answerOptions.styles.scss";
import {
    isCorrectCurrentBird,
    isLevelCompleted,
    isSelectedBirdExist,
    setCount,
    setSelectedBird,
    setTotal,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import lostSound from "../../sounds/lost.mp3";
import wonSound from "../../sounds/won.mp3";

const AnswerOptions = ({ birds, currentBird }) => {
  const dispatch = useDispatch();
  const levelCompleted = useSelector((state) => state.levelCompleted);
  const count = useSelector((state) => state.count);

  return (
    <div className="answer-options">
      <ul className="answers-group">
        {birds.map((bird) => (
          <li
            key={bird.name}
            className="answers-item"
            onClick={() => {
              dispatch(setSelectedBird(bird));
              dispatch(isSelectedBirdExist(true));
              const click = document.querySelector(`#${bird.name}`);
              if (!levelCompleted) {
                if (bird.name === currentBird.name) {
                  click.classList.add("won");
                  new Audio(wonSound).play();
                  dispatch(isCorrectCurrentBird(true))
                  dispatch(isLevelCompleted(true));
                  dispatch(setTotal(count));
                  dispatch(setCount(5));
                } else {
                  click.classList.remove("won");
                  if (!click.classList.contains("lost")) {
                    new Audio(lostSound).play();
                    dispatch(setCount(count - 1));
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
