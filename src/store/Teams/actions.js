import { ADD_TEAM, UPDATE_DATA } from "./constants";
import uuid from "react-uuid";

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});

export const addTeam = (data) => ({
  type: ADD_TEAM,
  payload: { id: uuid(), teamName: data },
});
