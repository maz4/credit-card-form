import * as actionTypes from "../constants/index";

const cardErrorState = {
  numberError: false,
  nameError: false,
  monthError: false,
  yearError: false,
  cvvError: false,
};

export const inputError = (state = cardErrorState, action) => {
  switch (action.type) {
    case actionTypes.NUMBER_ERROR:
      return {
        ...state,
        numberError: true,
      };
    case actionTypes.NAME_ERROR:
      return {
        ...state,
        nameError: true,
      };
    case actionTypes.MONTH_ERROR:
      return {
        ...state,
        monthError: true,
      };
    case actionTypes.YEAR_ERROR:
      return {
        ...state,
        yearError: true,
      };
    case actionTypes.CVV_ERROR:
      return {
        ...state,
        cvvError: true,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        numberError: false,
        nameError: false,
        monthError: false,
        yearError: false,
        cvvError: false,
      };
    default:
      return state;
  }
};
