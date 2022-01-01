import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectLevel, selectTotalScore } from "../../redux/progress/selectors";

import "./styles.scss";

const Header = () => {
  const questionTopics = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];
  const totalScore = useSelector(selectTotalScore);
  const level = useSelector(selectLevel);

  return (
    <div className="header-container">
      <div className="panel">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="score-title">
          Score:
          <span className="score-count"> {totalScore}</span>
        </div>
      </div>
      <ul className="pagination">
        {questionTopics.map((questionTopic, index) => (
          <li
            key={questionTopic}
            className={`nav-item ${level === index + 1 ? "active" : ""}`}
          >
            {questionTopic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
