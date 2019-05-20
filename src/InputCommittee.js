import React from "react";
import "./InputCommittee.css";
const InputCommittee = props => {
  return (
    <>
      <div className="group">
        <div className="box">
          <input
            required="required"
            onChange={props.handleInputCommittee}
            type="text"
            id="nameCommittee"
            name={props.numberCommittee}
          />
          <label htmlFor="nameCommittee">Nazwa Komitetu:</label>
        </div>
        <div className="box">
          <input
            required="required"
            onChange={props.handleInputCommittee}
            type="number"
            id="vote"
            name={props.numberCommittee}
            min="1"
          />
          <label htmlFor="vote">Ilość Głosów:</label>
        </div>
      </div>
    </>
  );
};

export default InputCommittee;
