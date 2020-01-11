import React from "react";

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

  return (
    <div>
      <label htmlFor={idFor}>
        {labelName} {error ? <span>Invalid Data</span> : null}
      </label>
      <input
        type={type}
        name={name}
        id={idFor}
        maxLength={maxCharacters}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Input;
