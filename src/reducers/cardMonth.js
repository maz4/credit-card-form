import * as actionTypes from "../constants/index";

export const cardMonth = (state = "", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CARD_MONTH:
      return action.payload;
    default:
      return state;
  }
};
