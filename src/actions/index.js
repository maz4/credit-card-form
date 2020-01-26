import * as actionTypes from "../constants/index";

export const updateNumber = payload => {
  return {
    type: actionTypes.UPDATE_CARD_NUMBER,
    payload,
  };
};

export const updateName = payload => {
  return {
    type: actionTypes.UPDATE_NAME,
    payload,
  };
};

export const updateMonth = payload => {
  return {
    type: actionTypes.UPDATE_CARD_MONTH,
    payload,
  };
};

export const updateYear = payload => {
  return {
    type: actionTypes.UPDATE_CARD_YEAR,
    payload,
  };
};

export const updateCvv = payload => {
  return {
    type: actionTypes.UPDATE_CARD_CVV,
    payload,
  };
};

export const setNumberError = () => {
  return {
    type: actionTypes.NUMBER_ERROR,
  };
};

export const setNameError = () => {
  return {
    type: actionTypes.NAME_ERROR,
  };
};

export const setMonthError = () => {
  return {
    type: actionTypes.MONTH_ERROR,
  };
};

export const setYearError = () => {
  return {
    type: actionTypes.YEAR_ERROR,
  };
};

export const setCvvError = () => {
  return {
    type: actionTypes.CVV_ERROR,
  };
};

export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};

export const cardBacVisible = payload => {
  return {
    type: actionTypes.CARD_BACK_VISIBLE,
    payload,
  };
};
