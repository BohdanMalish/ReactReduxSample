import { UPDATE_DATA, SET_SCORE } from './constants';

export const updateDataGames = (data) => ({
  type: UPDATE_DATA,
  payload: data
});

export const setGoalsValue = (el)=>({
  type:SET_SCORE,
  payload:el
})