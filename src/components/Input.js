import React from "react";

const Input = props => {
  const {type, name, idFor, labelName, maxCharacters} = props;
  return (
    <div>
      <label htmlFor={idFor}>{labelName}</label>
      <input type={type} name={name} id={idFor} maxLength={maxCharacters} />
    </div>
  );
};

export default Input;
