import { ADD_TEAM, UPDATE_DATA } from "./constants";
const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        data: action.payload,
      };
    case ADD_TEAM:
      return {
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
