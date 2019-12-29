import React from "react";
import {connect} from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  updateNumber,
  updateName,
  updateMonth,
  updateYear,
  updateCvv,
} from "../actions/index";

const CardForm = props => {
  const {cardNumber, cardName, cardMonth, cardYear, cardCvv} = props;

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

  return (
    <form>
      <Input
        type="number"
        name="cardNumber"
        labelName="card number"
        idFor="cardNumber"
        maxCharacters="16"
        updateHandler={updateCardNumber}
        value={cardNumber}
      />
      <Input
        type="text"
        name="cardName"
        labelName="card holder"
        idFor="ownerName"
        maxCharacters="999"
        updateHandler={updateCardName}
        value={cardName}
      />
      <Input
        type="number"
        name="expMonth"
        labelName="expiration month"
        idFor="expMonth"
        maxCharacters="2"
        updateHandler={updateCardMonth}
        value={cardMonth}
      />
      <Input
        type="number"
        name="expYear"
        labelName="expiration year"
        idFor="expYear"
        maxCharacters="2"
        updateHandler={updateCardYear}
        value={cardYear}
      />
      <Input
        type="number"
        name="cvv"
        labelName="cvv"
        idFor="cvv"
        maxCharacters="4"
        updateHandler={updateCardCvv}
        value={cardCvv}
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNumber: number => dispatch(updateNumber(number)),
    updateName: number => dispatch(updateName(number)),
    updateMonth: number => dispatch(updateMonth(number)),
    updateYear: number => dispatch(updateYear(number)),
    updateCvv: number => dispatch(updateCvv(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
