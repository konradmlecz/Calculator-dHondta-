import React from "react";

const InputCommittee = props => {
  return (
    <>
      <label htmlFor="nameCommittee">Nazwa Komitetu:</label>
      <input
        onChange={props.handleInputCommittee}
        type="text"
        id="nameCommittee"
        name={props.numberCommittee}
      />
      <label htmlFor="vote">Ilość głosów:</label>
      <input
        onChange={props.handleInputCommittee}
        type="number"
        id="vote"
        name={props.numberCommittee}
        min="1"
      />
      <br />
    </>
  );
};

export default InputCommittee;
