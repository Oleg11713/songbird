import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const total = useSelector((state) => state.total);
  const level = useSelector((state) => state.level);

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

export default Header;
