import { createSelector } from 'reselect';

export const teamsSelector = createSelector(
  (state) => state.teams,
  (teams) => teams.data
);
