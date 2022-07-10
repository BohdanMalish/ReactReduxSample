import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { teamsSelector } from "../../store/Teams/selector";
import { gamesSelector } from "../../store/Games/selector";
import { Result } from "../../store/Games/reducer";

import { Row } from "./Row";

export function Table() {
  const teams = useSelector(teamsSelector);
  const games = useSelector(gamesSelector);

  const dataTable = useMemo(() => {
    return teams
      .map((i, index) => {
        const gamesThisTeam = games.filter(
          (j) => j.idFirst === i.id || j.idSecond === i.id
        );
        return {
          ...i,
          games: gamesThisTeam.length,
          win: gamesThisTeam.filter(
            (j) =>
              (j.idFirst === i.id && j.result === Result.FirstTeamWin) ||
              (j.idSecond === i.id && j.result === Result.SecondTeamWin)
          ).length,
          lost: gamesThisTeam.filter(
            (j) =>
              (j.idFirst === i.id && j.result === Result.SecondTeamWin) ||
              (j.idSecond === i.id && j.result === Result.FirstTeamWin)
          ).length,
          draw: gamesThisTeam.filter((j) => j.result === Result.Draw).length,
        };
      })
      .sort((first, second) => {
        if (first.win * 3 + first.draw > second.win * 3 + second.draw) {
          return -1;
        }
        if (first.win * 3 + first.draw < second.win * 3 + second.draw) {
          return 1;
        }
        return 0;
      });
  }, [games,teams]);

  return (
    <table>
      <tr>
        <th>Place</th>
        <th>Team</th>
        <th>Played</th>
        <th>Win</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>Points</th>
      </tr>
      {dataTable.map((i, index) => (
        <Row data={i} place={index + 1} key={index} />
      ))}
    </table>
  );
}
