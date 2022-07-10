import { UPDATE_DATA, SET_SCORE } from './constants';

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data
});

export const setGoalsValue = (el)=>({
  type:SET_SCORE,
  payload:el
})