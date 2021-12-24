import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectLevel, selectTotalScore } from "../../redux/selectors";

import "./styles.scss";

const Header = ({ level, totalScore }) => {
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
          <li
            key={index}
            className={`nav-item ${level === index + 1 ? "active" : ""}`}
          >
            {questionTopic}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    level: selectLevel,
    totalScore: selectTotalScore,
  });

export default connect(mapStateToProps)(Header);
