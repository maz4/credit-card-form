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
