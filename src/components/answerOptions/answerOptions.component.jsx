import React from "react";

import "./answerOptions.styles.scss";
import {
  isLevelCompleted,
  setSelectedBird,
  setTotal,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AnswerOptions = ({ birds, currentBird }) => {
  const dispatch = useDispatch();
  const selectedBird = useSelector((state) => state.selectedBird);
  const levelCompleted = useSelector((state) => state.levelCompleted);
  const total = useSelector((state) => state.total);
  let count = 5;
  return (
    <div className="answer-options">
      <ul className="answers-group">
        {birds.map((bird) => (
          <li
            key={bird.name}
            className="answers-item"
            onClick={() => {
              console.log(count, total);
              dispatch(setSelectedBird(bird));
              console.log(selectedBird, levelCompleted);
              const click = document.querySelector(`#${bird.name}`);
              if (!levelCompleted) {
                if (bird.name === currentBird.name) {
                  click.classList.add("won");
                  dispatch(isLevelCompleted(true));
                  dispatch(setTotal(count));
                  count = 5;
                } else {
                  if (click.classList.contains("won"))
                    click.classList.remove("won");
                  click.classList.add("lost");
                  count--;
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
