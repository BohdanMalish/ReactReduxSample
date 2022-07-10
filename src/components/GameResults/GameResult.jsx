import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGoalsValue } from "../../store/Games/actions";
import { teamsSelector } from "../../store/Teams/selector";
import { Result } from "../../store/Games/reducer";
import styles from './index.module.css'

function GameResult({ data }) {
  const dispatch = useDispatch();

  const { idFirst, idSecond, goalsFirst, goalsSecond } = data;

  const [scoreFirst, setScoreFirst] = useState(goalsFirst);
  const [scoreSecond, setScoreSecond] = useState(goalsSecond);

  const teams = useSelector(teamsSelector);

  function getInfoByID(id) {
    return teams.find((element) => element.id === id);
  }

  function checkResult() {
    if (scoreFirst > scoreSecond) {
      return Result.FirstTeamWin;
    } else if (scoreSecond > scoreFirst) {
      return Result.SecondTeamWin;
    } else {
      return Result.Draw;
    }
  }

  useEffect(() => {
    dispatch(
      setGoalsValue({
        ...data,
        goalsFirst: scoreFirst,
        goalsSecond: scoreSecond,
        result: checkResult(),
      })
    );
  }, [scoreFirst, scoreSecond]);

  return (
    <div className={styles.ResultGames}>
      <span>{getInfoByID(idFirst).teamName}</span>
      <input
        value={scoreFirst}
        type={"number"}
        onChange={(e) => {
          if (e.target.value >= 0) {
            setScoreFirst(e.target.value);
          }
        }}
      ></input>
      <input
        value={scoreSecond}
        type={"number"}
        onChange={(e) => {
          if (e.target.value >= 0) {
            setScoreSecond(e.target.value);
          }
        }}
      ></input>
      <span>{getInfoByID(idSecond).teamName}</span>
    </div>
  );
}
export default GameResult;
