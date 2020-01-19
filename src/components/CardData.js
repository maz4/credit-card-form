import React from "react";
import styles from "./CardData.module.css";

const CardData = ({children}) => {
  return <div className={styles.CardData}>{children}</div>;
};

export default CardData;
