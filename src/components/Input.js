import React from "react";
import styles from "./Input.module.css";

const Input = props => {
  const {
    type,
    name,
    idFor,
    labelName,
    maxCharacters,
    digitsOnly,
    updateHandler,
    value,
    error,
    showCardBack,
  } = props;

  function changeHandler(event) {
    const maxValue = parseInt(maxCharacters, 10);
    const value = digitsOnly
      ? event.target.value.replace(/\D/, "")
      : event.target.value;

    if (value.length > maxValue) {
      return;
    }

    updateHandler(value);
  }

  function blurHandler() {
    if (name === "cvv") {
      showCardBack(false);
    }
  }

  function focusHandler() {
    if (name === "cvv") {
      showCardBack(true);
    }
  }

  return (
    <div className={styles.Input__wrapper}>
      <label className={styles.Input__label} htmlFor={idFor}>
        {labelName} {error ? <span>Invalid Data</span> : null}
      </label>
      <input
        className={styles.Input__element}
        type={type}
        name={name}
        id={idFor}
        maxLength={maxCharacters}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        value={value}
      />
    </div>
  );
};

export default Input;
