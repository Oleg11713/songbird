import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectLevel, selectTotalScore } from "../../redux/progress/selectors";
import { selectCurrentUser } from "../../redux/user/selectors";
import { auth } from "../../firebase/utils";

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
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();

  return (
    <div className="header-container">
      <div className="navigation">
        <div className="panel">
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          {currentUser ? (
            <div className="current-user-info">
              <div className="display-name">{currentUser.displayName}</div>
              <div className="score-title">
                Score:
                <span className="score-count"> {totalScore}</span>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
        {currentUser ? (
          <Link
            className="sign-in-and-sign-up-link"
            to="/"
            onClick={() => {
              history.go(0);
              return auth.signOut();
            }}
          >
            Sign Out
          </Link>
        ) : (
          <Link className="sign-in-and-sign-up-link" to="/signIn">
            Sign In
          </Link>
        )}
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
