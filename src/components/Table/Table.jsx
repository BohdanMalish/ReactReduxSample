import React from "react";
import { Row } from "./Row";
export function Table() {
  const data = [{ team: "Team1", games: 2, win: 1, draw: 1, lost: 1 }];
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
      {data.map((i, index) => (
        <Row data={i} place={index + 1} />
      ))}
    </table>
  );
}
