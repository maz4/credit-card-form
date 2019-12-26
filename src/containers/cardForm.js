import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const CardForm = () => {
  return (
    <form>
      <Input
        type="number"
        name="cardNumber"
        labelName="card number"
        idFor="cardNumber"
        maxCharacter="8"
      />
      <Input
        type="text"
        name="name"
        labelName="card holder"
        idFor="ownerName"
        maxCharacter="999"
      />
      <Input
        type="number"
        name="expMonth"
        labelName="expiration month"
        idFor="expMonth"
        maxCharacter="2"
      />
      <Input
        type="number"
        name="expYear"
        labelName="expiration year"
        idFor="expYear"
        maxCharacter="2"
      />
      <Input
        type="number"
        name="cvv"
        labelName="cvv"
        idFor="cvv"
        maxCharacter="4"
      />
      <Button text="submit" />
    </form>
  );
};

export default CardForm;
