import React from 'react';
import {render as rtlRender, fireEvent} from '@testing-library/react';
import App from './App';

function render(component) {

  return rtlRender(component);
}

const testCardNumber = '4000 1111 2222 3333'

test('renders the card form and type in the fields', () => {
  const {getByText, getByLabelText, getByTestId, queryByAltText, queryByText} = render(<App/>);

  const cardNumber = getByLabelText(/card number/i);
  const cardHolder = getByLabelText(/card holder/i);
  const experationMonth = getByLabelText(/expiration month/i);
  const experationYear = getByLabelText(/expiration year/i);
  const cvvCode = getByLabelText(/cvv/i);
  const submit = getByText(/submit/i);

  const presentedCardNumber = getByTestId(/card-number/i);
  const presentedCardName = getByTestId(/card-name/i);
  const presentedCardMonth = getByTestId(/card-month/i);
  const presentedCardYear = getByTestId(/card-year/i);
  const presentedCardCvv = getByTestId(/card-cvv/i);

  fireEvent.change(cardNumber, {target: {value: testCardNumber}});

  expect(presentedCardNumber).toBe(testCardNumber);
  expect(queryByAltText('visa')).toBeInTheDocument();

  fireEvent.change(cardHolder, {target: {value: 'test test'}});

  expect(presentedCardName).toBe('test test');

  fireEvent.change(experationMonth, {target: {value: '01'}});

  expect(presentedCardMonth).toBe('01');

  fireEvent.change(experationYear, {target: {value: '2020'}});

  expect(presentedCardYear).toBe('20');

  fireEvent.change(cvvCode, {target: {value: '111'}});

  expect(presentedCardCvv).toBe('111');

  fireEvent.click(submit);

  expect(queryByText(/payment succeesful/i));

});
