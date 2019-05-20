import React from "react";
import "./DisplayResualtItem.css";

const DisplayResualtItem = props => {
  const mandateName = () => {
    if (props.committee.mandates === 1) return "mandat";
    else if (props.committee.mandates === 0 || props.committee.mandates > 4)
      return "mandatów";
    else if (props.committee.mandates > 1 && props.committee.mandates < 5)
      return "mandaty";
  };
  return (
    <>
      <li>
        Komitet {props.committee.name} uzyskał{" "}
        <span>{props.committee.mandates}</span> {mandateName()}, przy{" "}
        {((props.committee.vote / props.sumOfVotes) * 100).toFixed(2)} % głosów
      </li>
    </>
  );
};

export default DisplayResualtItem;
