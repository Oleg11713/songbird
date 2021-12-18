import React from "react";

import "./endGamePage.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetTotal } from "../redux/actions";

const EndGamePage = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.total);

  return (
    <div className="end-game-page">
      <h1 className="title">Поздравляем!</h1>
      <p className="text">
        Вы прошли викторину и набрали <strong>{total}</strong> из
        <strong> 30</strong> возможных баллов
      </p>
      <hr className="area" />
      <Link
        to="/"
        onClick={() => {
          dispatch(resetTotal(0));
        }}
      >
        <button className="button-try-again">Попробовать еще раз!</button>
      </Link>
    </div>
  );
};

export default EndGamePage;
