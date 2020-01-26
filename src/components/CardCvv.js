import React from "react";
import styles from "./CardCvv.module.css";

const CardCvv = ({cvv}) => {
  return (
    <div className={styles.CardCvv} data-testid="card-cvv">
      <p className={styles.CardCvv__text}>{cvv}</p>
    </div>
  );
};

export default CardCvv;
