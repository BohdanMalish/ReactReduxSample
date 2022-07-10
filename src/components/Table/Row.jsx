import React from "react";

export function Row({ data, place }) {
  const { team, games, win = 0, draw = 0, lost = 0 } = data;
  const points = win * 3 + draw;
  return (
    <tr>
      <td>{place}</td>
      <td>{team}</td>
      <td>{games}</td>
      <td>{win}</td>
      <td>{draw}</td>
      <td>{lost}</td>
      <td>{points}</td>
    </tr>
  );
}
