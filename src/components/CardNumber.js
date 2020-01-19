import React from "react";
import styles from "./CardNumber.module.css";
const CardNumber = ({number}) => {
  return (
    <p className={styles.CardNumber} data-testid="card-number">
      {number}
    </p>
  );
};

export default CardNumber;
