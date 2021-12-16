import React from "react";

import "./answerOptions.styles.scss";
import { setSelectedBird } from "../../redux/actions";
import { connect } from "react-redux";

const AnswerOptions = ({ birds, currentBird, selectedBird, dispatch }) => {
  console.log(selectedBird);
  return (
    <div className="answer-options">
      <ul className="answers-group">
        <li
          className="answers-item"
          onClick={() => {
            dispatch(setSelectedBird(birds[0]));
            const click = document.querySelector(".first");
            if (birds[0].id === currentBird.id) {
              click.classList.add("won");
            } else {
              click.classList.remove("won");
              click.classList.add("lost");
            }
          }}
        >
          <span className={`first circle`} />
          {birds[0].name}
        </li>
        <li
          className="answers-item"
          onClick={() => {
            dispatch(setSelectedBird(birds[1]));
            const click = document.querySelector(".second");
            if (birds[1].id === currentBird.id) {
              click.classList.add("won");
            } else {
              click.classList.remove("won");
              click.classList.add("lost");
            }
          }}
        >
          <span className={`second circle`} />
          {birds[1].name}
        </li>
        <li
          className="answers-item"
          onClick={() => {
            dispatch(setSelectedBird(birds[2]));
            const click = document.querySelector(".third");
            if (birds[2].id === currentBird.id) {
              click.classList.add("won");
            } else {
              click.classList.remove("won");
              click.classList.add("lost");
            }
          }}
        >
          <span className={`third circle`} />
          {birds[2].name}
        </li>
        <li
          className="answers-item"
          onClick={() => {
            dispatch(setSelectedBird(birds[3]));
            const click = document.querySelector(".fourth");
            if (birds[3].id === currentBird.id) {
              click.classList.add("won");
            } else {
              click.classList.remove("won");
              click.classList.add("lost");
            }
          }}
        >
          <span className={`fourth circle`} />
          {birds[3].name}
        </li>
        <li
          className="answers-item"
          onClick={() => {
            dispatch(setSelectedBird(birds[4]));
            const click = document.querySelector(".fifth");
            if (birds[4].id === currentBird.id) {
              click.classList.add("won");
            } else {
              click.classList.remove("won");
              click.classList.add("lost");
            }
          }}
        >
          <span className={`fifth circle`} />
          {birds[4].name}
        </li>
        <li
          className="answers-item"
          onClick={() => {
            dispatch(setSelectedBird(birds[5]));
            const click = document.querySelector(".six");
            if (birds[5].id === currentBird.id) {
              click.classList.add("won");
            } else {
              click.classList.remove("won");
              click.classList.add("lost");
            }
          }}
        >
          <span className={`six circle`} />
          {birds[5].name}
        </li>
      </ul>
    </div>
  );
};

export default connect()(AnswerOptions);
