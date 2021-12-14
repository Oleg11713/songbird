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
    <div className="pagination">
      <span className="nav-item nav-item_active">Разминка</span>
      <span className="nav-item">Воробьиные</span>
      <span className="nav-item">Лесные птицы</span>
      <span className="nav-item">Певчие птицы</span>
      <span className="nav-item">Хищные птицы</span>
      <span className="nav-item">Морские птицы</span>
    </div>
  </div>
);

export default Header;
