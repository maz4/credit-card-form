import React from "react";
import {connect} from "react-redux";

const Card = () => {
  return (
    <div>
      <p data-testid="card-number"></p>
      <p data-testid="card-name"></p>
      <p data-testid="card-month"></p>
      <p data-testid="card-year"></p>
      <p data-testid="card-cvv"></p>
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
