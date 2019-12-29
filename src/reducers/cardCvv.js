import * as actionTypes from "../constants/index";

export const cardCvv = (state = "", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CARD_CVV:
      return action.payload;
    default:
      return state;
  }
};
