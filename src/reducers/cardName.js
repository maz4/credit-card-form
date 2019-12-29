import * as actionTypes from "../constants/index";

export const cardName = (state = "", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_NAME:
      return action.payload;
    default:
      return state;
  }
};
