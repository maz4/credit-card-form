import * as actionTypes from "../constants/index";

export const cardNumber = (state = "", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CARD_NUMBER:
      return action.payload;
    default:
      return state;
  }
};
