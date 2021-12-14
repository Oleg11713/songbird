import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header-container">
    <div className="panel">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="score-title">
        Score:
        <span className="score-count"> 0</span>
      </div>
    </div>
    <ul className="pagination">
      <li className="nav-item nav-item_active">Разминка</li>
      <li className="nav-item">Воробьиные</li>
      <li className="nav-item">Лесные птицы</li>
      <li className="nav-item">Певчие птицы</li>
      <li className="nav-item">Хищные птицы</li>
      <li className="nav-item">Морские птицы</li>
    </ul>
  </div>
);

export default Header;
