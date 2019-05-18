import React from "react";
import DisplayResualtItem from "./DisplayResualtItem";

const DisplayResaultList = props => {
  const committees = props.committees.map(committee => {
    return (
      <DisplayResualtItem
        key={committee.id}
        committee={committee}
        sumOfVotes={props.sumOfVotes}
      />
    );
  });
  return (
    <>
      <ul>{committees}</ul>
    </>
  );
};

export default DisplayResaultList;
