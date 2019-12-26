import React from "react";

const Card = () => {
  return (
    <div>
      <p data-testid="card-number"></p>
      <p data-testid="card-name"></p>
      <p data-testid="card-month"></p>
      <p data-testid="card-year"></p>
      <p data-testid="card-cvv"></p>
    </div>
  );
};

export default Card;
