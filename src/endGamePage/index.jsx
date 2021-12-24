import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { resetTotalScore } from "../redux/actions";
import { selectTotalScore } from "../redux/selectors";

import "./styles.scss";

const EndGamePage = ({ totalScore }) => {
  const dispatch = useDispatch();

  return (
    <div className="end-game-page">
      <h1 className="title">Поздравляем!</h1>
      <p className="end-game-congratulations">
        Вы прошли викторину и набрали <strong>{totalScore}</strong> из
        <strong> 30</strong> возможных баллов
      </p>
      <hr className="area" />
      <Link
        to="/"
        onClick={() => {
          dispatch(resetTotalScore(0));
        }}
      >
        <button className="button-try-again">Попробовать еще раз!</button>
      </Link>
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    totalScore: selectTotalScore,
  });

export default connect(mapStateToProps)(EndGamePage);
