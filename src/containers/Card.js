import React from "react";
import {connect} from "react-redux";
import styles from "./Card.module.css";
import CardNumber from "../components/CardNumber";
import CardLogo from "../components/CardLogo";
import CardName from "../components/CardName";
import CardDate from "../components/CardDate";
import CardCvv from "../components/CardCvv";
import CardData from "../components/CardData";

const Card = props => {
  const {
    cardNumber,
    cardName,
    cardMonth,
    cardYear,
    cardCvv,
    cardBackVisible,
  } = props;

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
        return "Visa";
    }
  };

  const staredNumber = starCardNumber(cardNumber);
  const formatCardNumber = spaceString(staredNumber);
  const cardCompany = cardIndustryIdentifier(cardNumber);
  console.log(typeof styles.Card);
  return (
    <div
      className={
        !cardBackVisible ? styles.Card : `${styles.Card} ${styles.CardBack}`
      }
    >
      {!cardBackVisible ? (
        <>
          <CardLogo
            alt={cardCompany}
            src={cardCompany
              .toLowerCase()
              .split(" ")
              .join("")}
          />
          <CardNumber number={formatCardNumber} />
          <CardData>
            <CardName name={cardName === "" ? "Name" : cardName} />
            <CardDate
              month={cardMonth === "" ? "--" : cardMonth}
              year={cardYear === "" ? "--" : cardYear}
            />
          </CardData>
        </>
      ) : (
        <CardCvv cvv={cardCvv === "" ? "---" : cardCvv} />
      )}
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
    cardBackVisible: state.cardBackVisible,
  };
};

export default connect(mapStateToProps)(Card);
