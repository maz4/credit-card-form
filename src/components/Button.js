import React from "react";
import styles from "./Button.module.css";

const Button = props => {
  const {text} = props;
  return <button className={styles.Button}>{text}</button>;
};

export default Button;
