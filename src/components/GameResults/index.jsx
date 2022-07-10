import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { gamesSelector } from "../../store/Games/selector";
import { teamsSelector } from "../../store/Teams/selector";
import { Result } from "../../store/Games/reducer";
import { updateData } from "../../store/Games/actions";

import GameResult from "./GameResult";

import styles from './index.module.css'

export function GameResults() {
  const dispatch = useDispatch();

  const teams = useSelector(teamsSelector);
  const games = useSelector(gamesSelector);

  useEffect(() => {
    dispatch(updateData(generateGames()));
  }, [teams]);

  function generateGames() {
    if (teams.length <= 1) {
      return [];
    } else if (teams.length >= 2) {
      let tempTeams = teams;
      const arr = [];
      teams.forEach((i) => {
        tempTeams.forEach((j) => {
          if (j.id !== i.id) {
            arr.push({
              idFirst: i.id,
              idSecond: j.id,
              goalsFirst: 0,
              goalsSecond: 0,
              result: Result.Draw,
              ...games.find((element) => element.idFirst === i.id&&element.idSecond===j.id),
            });
          }
        });
        tempTeams = tempTeams.filter((l) => l.id !== i.id);
      });
      return arr;
    }
  }
  return (
    <div className={styles.ListGames}>
      {games.length ? (
        games.map((i, index) => {
          return <GameResult data={i} key={index} />;
        })
      ) : (
        <>No one games yet</>
      )}
    </div>
  );
}

export default GameResults;
