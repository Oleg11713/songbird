import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectLevel, selectTotalScore } from "../../redux/progress/selectors";
import { Context } from "../../index";

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
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className="header-container">
      <div className="navigation">
        <div className="panel">
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          {user ? (
            <div className="score-title">
              Score:
              <span className="score-count"> {totalScore}</span>
            </div>
          ) : (
            <div />
          )}
        </div>
        {user ? (
          <Link
            className="sign-in-and-sign-up-link"
            to="/"
            onClick={() => auth.signOut()}
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
