import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";

import "./header.styles.scss";
import { INITIAL_STATE as state } from "../../redux/state";

const Header = ({ level, total }) => {
  console.log(state.level);

  return (
    <div className="header-container">
      <div className="panel">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="score-title">
          Score:
          <span className="score-count"> {total}</span>
        </div>
      </div>
      <ul className="pagination">
        <li className={`nav-item ${level === 0 ? "active" : ""}`}>Разминка</li>
        <li className={`nav-item ${level === 1 ? "active" : ""}`}>
          Воробьиные
        </li>
        <li className={`nav-item ${level === 2 ? "active" : ""}`}>
          Лесные птицы
        </li>
        <li className={`nav-item ${level === 3 ? "active" : ""}`}>
          Певчие птицы
        </li>
        <li className={`nav-item ${level === 4 ? "active" : ""}`}>
          Хищные птицы
        </li>
        <li className={`nav-item ${level === 5 ? "active" : ""}`}>
          Морские птицы
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = () => ({
  level: state.level,
});

export default connect(mapStateToProps)(Header);
