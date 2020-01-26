import * as actionTypes from "../constants/index";

export const cardBackVisible = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CARD_BACK_VISIBLE:
      return action.payload;
    default:
      return state;
  }
};
