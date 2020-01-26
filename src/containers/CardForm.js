import React from "react";
import {connect} from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./CardForm.module.css";
import {
  updateNumber,
  updateName,
  updateMonth,
  updateYear,
  updateCvv,
  setCvvError,
  setMonthError,
  setNameError,
  setNumberError,
  setYearError,
  clearErrors,
  cardBacVisible,
} from "../actions/index";

const CardForm = props => {
  const {
    cardNumber,
    cardName,
    cardMonth,
    cardYear,
    cardCvv,
    numberError,
    nameError,
    monthError,
    yearError,
    cvvError,
  } = props;

  const updateCardNumber = value => {
    props.updateNumber(value);
  };

  const updateCardName = value => {
    props.updateName(value);
  };

  const updateCardMonth = value => {
    props.updateMonth(value);
  };

  const updateCardYear = value => {
    props.updateYear(value);
  };

  const updateCardCvv = value => {
    props.updateCvv(value);
  };

  const checkWhiteSpaces = str => {
    return RegExp(/^\s*$/).test(str);
  };

  const submitHandler = event => {
    event.preventDefault();
    props.clearErrors();
    const numberStatus = cardNumber.length === 16;
    const nameStatus = checkWhiteSpaces(cardName);
    const expMonthStatus = cardMonth.length === 2;
    const expYearStatus = cardYear.length === 2;
    const cvvStatus = cardCvv.length >= 3 && cardCvv.length <= 4;

    if (!numberStatus) {
      props.setNumberError();
    }

    if (nameStatus) {
      props.setNameError();
    }

    if (!expMonthStatus) {
      props.setMonthError();
    }

    if (!expYearStatus) {
      props.setYearError();
    }

    if (!cvvStatus) {
      props.setCvvError();
    }

    if (
      numberStatus &&
      !nameStatus &&
      expMonthStatus &&
      expYearStatus &&
      cvvStatus
    ) {
      event.target.submit();
    }
  };

  const showCardBack = status => {
    props.cardBacVisible(status);
  };

  return (
    <form className={styles.CardForm} onSubmit={event => submitHandler(event)}>
      <Input
        type="text"
        name="cardNumber"
        labelName="card number"
        idFor="cardNumber"
        maxCharacters="16"
        digitsOnly={true}
        updateHandler={updateCardNumber}
        value={cardNumber}
        error={numberError}
      />
      <Input
        type="text"
        name="cardName"
        labelName="card holder"
        idFor="ownerName"
        maxCharacters="40"
        updateHandler={updateCardName}
        value={cardName}
        error={nameError}
      />
      <Input
        type="number"
        name="expMonth"
        labelName="expiration month"
        idFor="expMonth"
        maxCharacters="2"
        digitsOnly={true}
        updateHandler={updateCardMonth}
        value={cardMonth}
        error={monthError}
      />
      <Input
        type="number"
        name="expYear"
        labelName="expiration year"
        idFor="expYear"
        maxCharacters="2"
        digitsOnly={true}
        updateHandler={updateCardYear}
        value={cardYear}
        error={yearError}
      />
      <Input
        type="number"
        name="cvv"
        labelName="cvv"
        idFor="cvv"
        maxCharacters="4"
        digitsOnly={true}
        updateHandler={updateCardCvv}
        showCardBack={showCardBack}
        value={cardCvv}
        error={cvvError}
      />
      <Button text="submit" />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    cardNumber: state.cardNumber,
    cardName: state.cardName,
    cardMonth: state.cardMonth,
    cardYear: state.cardYear,
    cardCvv: state.cardCvv,
    numberError: state.inputError.numberError,
    nameError: state.inputError.nameError,
    monthError: state.inputError.monthError,
    yearError: state.inputError.yearError,
    cvvError: state.inputError.cvvError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNumber: number => dispatch(updateNumber(number)),
    updateName: number => dispatch(updateName(number)),
    updateMonth: number => dispatch(updateMonth(number)),
    updateYear: number => dispatch(updateYear(number)),
    updateCvv: number => dispatch(updateCvv(number)),
    setNumberError: () => dispatch(setNumberError()),
    setNameError: () => dispatch(setNameError()),
    setMonthError: () => dispatch(setMonthError()),
    setYearError: () => dispatch(setYearError()),
    setCvvError: () => dispatch(setCvvError()),
    clearErrors: () => dispatch(clearErrors()),
    cardBacVisible: status => dispatch(cardBacVisible(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
