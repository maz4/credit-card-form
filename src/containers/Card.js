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

  const starCardNumber = cardNumber => {
    const fullNumberLength = 16;
    const cardNumberLength = cardNumber.length;
    const hashAmount = fullNumberLength - cardNumberLength;
    let cardNumberCopy = cardNumber.slice();

    for (let i = hashAmount; i > 0; i--) {
      cardNumberCopy = cardNumberCopy + "*";
    }

    return cardNumberCopy;
  };

  const cardIndustryIdentifier = cardNumber => {
    const firstDigit = cardNumber.slice(0, 1);
    switch (firstDigit) {
      case "3":
        return "American Express";
      case "4":
        return "Visa";
      case "5":
        return "MasterCard";
      case "6":
        return "Discover Card";
      default:
        return null;
    }
  };

  const staredNumber = starCardNumber(cardNumber);
  const formatCardNumber = spaceString(staredNumber);

  return (
    <div>
      <p data-testid="card-identifier">{cardIndustryIdentifier(cardNumber)}</p>
      <p data-testid="card-number">{formatCardNumber}</p>
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
