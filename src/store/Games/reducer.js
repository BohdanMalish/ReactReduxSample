import { UPDATE_DATA, SET_SCORE } from "./constants";
export const Result = {
  FirstTeamWin: 1,
  SecondTeamWin: 2,
  Draw: 3,
};
const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        data: action.payload,
      };
    case SET_SCORE:
      const newData = state.data.map((i) => {
        if (
          i.idFirst === action.payload.idFirst &&
          i.idSecond === action.payload.idSecond
        ) {
          return { ...i, ...action.payload,};
        } else {
          return i;
        }
      });
      return {
        data: newData,
      };
    default:
      return state;
  }
};

export default reducer;
