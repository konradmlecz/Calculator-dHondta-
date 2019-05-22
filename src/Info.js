import React from "react";
import "./Info.css";

const Info = props => {
  return (
    <>
      <div className="info">
        <h1>Kalkulator:</h1>
        <p>1. Pokazuje podział ilości mandatów pomiędzy komitety wyborcze.</p>
        <p>2. Uwzględnia ilość mandatów w wyborach do Sejmu.</p>
        <p>3. Nie uwzględnia progu wyborczego 5%.</p>
        <p>
          4. Dotyczy podziału w ramach okręgu wyborczego, a nie w skali kraju.
        </p>
        <i className="fas fa-times" onClick={() => props.setInfo(false)} />
      </div>
    </>
  );
};

export default Info;
