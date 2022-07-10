import { createSelector } from 'reselect';

export const gamesSelector = createSelector(
  (state) => state.games,
  (games) => games.data
);
