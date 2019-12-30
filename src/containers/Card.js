import React from "react";
import {connect} from "react-redux";

const Card = props => {
  const {cardNumber, cardName, cardMonth, cardYear, cardCvv} = props;

  const spaceString = str => {
    const strArr = str.split("");

    return strArr.map((elem, index) => {
      if (!(index % 4) && index !== 0) {
        return " " + elem;
      }

      return elem;
    });
  };

  const cardIndustryIdentifier = cardNumber => {
    //check of the industry identifier with switch;
    return cardNumber;
  };

  return (
    <div>
      <p data-testid="card-identifier">{cardIndustryIdentifier(cardNumber)}</p>
      <p data-testid="card-number">{spaceString(cardNumber)}</p>
      <p data-testid="card-name">{cardName}</p>
      <p data-testid="card-month">{cardMonth}</p>
      <p data-testid="card-year">{cardYear}</p>
      <p data-testid="card-cvv">{cardCvv}</p>
    </div>
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

export default connect(mapStateToProps)(Card);
