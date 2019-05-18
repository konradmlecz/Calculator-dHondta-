import React from "react";
import Select from "./Select";

const mandates = [
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
  { value: 11 },
  { value: 12 },
  { value: 13 },
  { value: 14 },
  { value: 15 },
  { value: 16 },
  { value: 17 },
  { value: 18 },
  { value: 19 },
  { value: 20 }
];

const committees = [
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 }
];

const SelectList = props => {
  const mandatesList = mandates.map(mandate => {
    return <Select key={mandate.value} value={mandate.value} />;
  });
  const committeeList = committees.map(committee => {
    return <Select key={committee.value} value={committee.value} />;
  });
  return (
    <>
      <form>
        <label htmlFor="mandate">Ilość mandatów </label>
        <select
          name="mandate"
          id="mandate"
          onChange={props.handleSelectMandate}
        >
          {mandatesList}
        </select>
      </form>
      <br />
      <form>
        <label htmlFor="committee">Ilość komitetów </label>
        <select
          name="committee"
          id="committee"
          onChange={props.handleSelectCommittee}
        >
          {committeeList}
        </select>
      </form>
      <br />
    </>
  );
};

export default SelectList;
