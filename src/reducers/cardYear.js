import * as actionTypes from "../constants/index";

export const cardYear = (state = "", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CARD_YEAR:
      return action.payload;
    default:
      return state;
  }
};
