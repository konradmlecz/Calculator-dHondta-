import React from "react";

const DisplayResualtItem = props => {
  return (
    <>
      <li>
        {props.committee.name} uzyskał {props.committee.mandates} mandatów, przy{" "}
        {((props.committee.vote / props.sumOfVotes) * 100).toFixed(2)} % głosów
      </li>
    </>
  );
};

export default DisplayResualtItem;
