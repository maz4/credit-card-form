import React from "react";
import styles from "./CardDate.module.css";

const CardDate = ({month, year}) => {
  return (
    <div className={styles.CardDate}>
      <p className={styles.CardDate__label}>Expires</p>
      <div className={styles.CardDate__wrapper}>
        <p className={styles.CardDate__month} data-testid="card-month">
          {month}
        </p>
        <p className={styles.CardDate__year} data-testid="card-year">
          {year}
        </p>
      </div>
    </div>
  );
};

export default CardDate;
