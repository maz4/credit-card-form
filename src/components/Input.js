import React from "react";

const Input = props => {
  const {
    type,
    name,
    idFor,
    labelName,
    maxCharacters,
    updateHandler,
    value,
  } = props;

  function changeHandler(event) {
    const maxValue = parseInt(maxCharacters, 10);
    const value = event.target.value;

    if (value.length > maxValue) {
      return;
    }

    updateHandler(value);
  }

  return (
    <div>
      <label htmlFor={idFor}>{labelName}</label>
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
