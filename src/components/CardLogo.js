import React from "react";
import styles from "./CardLogo.module.css";
const CardLogo = ({logoTxt}) => {
  return (
    <img
      className={styles.CardLogo}
      alt={logoTxt}
      src={`/${logoTxt}.png`}
      width={"80px"}
      data-testid="card-identifier"
    />
  );
};

export default CardLogo;
