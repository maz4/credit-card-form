import {compose, createStore} from "redux";
import reducer from "../reducers";

export const storeConfig = initialState => {
  // const composeEnhancers =
  // process.env.NODE_ENV === "development"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   : compose;

  // return createStore(reducer, initialState, composeEnhancers());
  return createStore(reducer, initialState, compose());
};
