import React from "react";
import {render as rtlRender, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "../store";
// import {cardMonth} from "../reducers/cardMonth";
// import {cardYear} from "../reducers/cardYear";
// import {cardCvv} from "../reducers/cardCvv";

function render(component) {
  return rtlRender(<Provider store={store}>{component}</Provider>);
}

test("renders the card form and type in the fields", () => {
  const {getByText, getByLabelText, getByTestId, queryByText} = render(<App />);

  const cardNumber = getByLabelText(/card number/i);
  const cardHolder = getByLabelText(/card holder/i);
  const expirationMonth = getByLabelText(/expiration month/i);
  const expirationYear = getByLabelText(/expiration year/i);
  const cvvCode = getByLabelText(/cvv/i);
  const submit = getByText(/submit/i);

  const presentedCardNumber = getByTestId("card-number");
  const presentedCardName = getByTestId(/card-name/i);
  const presentedCardMonth = getByTestId(/card-month/i);
  const presentedCardYear = getByTestId(/card-year/i);
  const presentedCardCvv = getByTestId(/card-cvv/i);
  const presentedCardIdentifier = getByTestId(/card-identifier/i);

  expect(presentedCardNumber).toHaveTextContent("**** **** **** ****");

  fireEvent.change(cardNumber, {target: {value: "40001111"}});

  expect(presentedCardNumber).toHaveTextContent("4000 1111 **** ****");

  fireEvent.change(cardNumber, {target: {value: "4000111122223333"}});

  expect(presentedCardNumber).toHaveTextContent("4000 1111 2222 3333");
  expect(presentedCardIdentifier).toHaveTextContent("Visa");

  fireEvent.change(cardHolder, {target: {value: "test test"}});

  expect(presentedCardName).toHaveTextContent("test test");

  fireEvent.change(expirationMonth, {target: {value: "01"}});

  expect(presentedCardMonth).toHaveTextContent("01");

  fireEvent.change(expirationYear, {target: {value: "20"}});

  expect(presentedCardYear).toHaveTextContent("20");

  fireEvent.change(cvvCode, {target: {value: "111"}});

  expect(presentedCardCvv).toHaveTextContent("111");

  fireEvent.click(submit);

  expect(queryByText(/payment succeesful/i));
});

test("it will show errors on invalid data", () => {
  const {getByLabelText, queryAllByText, getByText} = render(<App />);

  const cardNumber = getByLabelText(/card number/i);
  const cardHolder = getByLabelText(/card holder/i);
  const expirationMonth = getByLabelText(/expiration month/i);
  const expirationYear = getByLabelText(/expiration year/i);
  const cvvCode = getByLabelText(/cvv/i);
  const submitButton = getByText(/submit/i);

  fireEvent.change(cardNumber, {target: {value: ""}});
  fireEvent.change(cardHolder, {target: {value: ""}});
  fireEvent.change(expirationMonth, {target: {value: ""}});
  fireEvent.change(expirationYear, {target: {value: ""}});
  fireEvent.change(cvvCode, {target: {value: ""}});
  fireEvent.click(submitButton);

  expect(queryAllByText(/invalid data/i)).toHaveLength(5);
});
