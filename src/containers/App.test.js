import React from "react";
import {render as rtlRender, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "../store";

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

  fireEvent.change(cardNumber, {target: {value: "4000111122223333"}});

  expect(presentedCardNumber).toHaveTextContent("4000 1111 2222 3333");
  // expect(queryByAltText("visa")).toBeInTheDocument();

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

test.skip("it will show errors on invalid data", () => {
  const {getByLabelText, queryByText} = render(<App />);

  const cardNumber = getByLabelText(/card number/i);
  const cardHolder = getByLabelText(/card holder/i);
  const expirationMonth = getByLabelText(/expiration month/i);
  const expirationYear = getByLabelText(/expiration year/i);
  const cvvCode = getByLabelText(/cvv/i);

  fireEvent.change(cardNumber, {target: {value: "1111 2222 3333 444"}});

  expect(queryByText(/invalid card number/i)).toBeInTheDocument();

  fireEvent.change(cardHolder, {target: {value: "test"}});

  expect(queryByText(/invalid name/i)).toBeInTheDocument();

  fireEvent.change(expirationMonth, {target: {value: ""}});

  expect(queryByText(/invalid expiration month/i)).toBeInTheDocument();

  fireEvent.change(expirationYear, {target: {value: ""}});

  expect(queryByText(/invalid expiration year/i)).toBeInTheDocument();

  fireEvent.change(cvvCode, {target: {value: "11"}});

  expect(queryByText(/invalid cvv code/i)).toBeInTheDocument();
});
