import React from "react";
import styles from "./CardName.module.css";

const CardName = ({name}) => {
  return (
    <div className={styles.CardName}>
      <p className={styles.CardName__label}>Card Holder</p>
      <p className={styles.CardName__name} data-testid="card-name">
        {name}
      </p>
    </div>
  );
};

export default CardName;
