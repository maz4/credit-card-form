import React from "react";
import styles from "./CardCvv.module.css";

const CardCvv = ({cvv}) => {
  return (
    <p className={styles.CardCvv} data-testid="card-cvv">
      {cvv}
    </p>
  );
};

export default CardCvv;
