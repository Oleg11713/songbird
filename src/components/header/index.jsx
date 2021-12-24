import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./styles.scss";

const Header = () => {
  const totalScore = useSelector((state) => state.totalScore);
  const level = useSelector((state) => state.level);

  const questionTopics = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];

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
          <li key={index} className={`nav-item ${level === (index + 1) ? "active" : ""}`}>{questionTopic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
