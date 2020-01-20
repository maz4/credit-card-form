import React from "react";
import styles from "./CardLogo.module.css";
const CardLogo = ({src, alt}) => {
  return (
    <img
      className={styles.CardLogo}
      alt={`${alt} logo`}
      src={`/${src}.png`}
      width={"80px"}
      data-testid="card-identifier"
    />
  );
};

export default CardLogo;
