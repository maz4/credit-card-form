import {combineReducers} from "redux";
import {cardNumber} from "./cardNumber";
import {cardName} from "./cardName";
import {cardMonth} from "./cardMonth";
import {cardYear} from "./cardYear";
import {cardCvv} from "./cardCvv";

export const reducer = combineReducers({
  cardNumber,
  cardName,
  cardMonth,
  cardYear,
  cardCvv,
});
