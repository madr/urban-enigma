import React from "react";
import Set from "./set";
import SetStats from "./set-stats";

const groupByExercise = sets =>
  sets.reduce((acc, set) => {
    const { exercise } = set;
    if (!acc[exercise]) {
      acc[exercise] = [set];
    } else {
      acc[exercise] = [...acc[exercise], set];
    }
    return acc;
  }, {});

export default props => {
  const { doneAt, name, sets, collapse, fold } = props;
  const handleOnToggle = elem => {
    if (!elem.open && sets.length) {
      fold(doneAt);
    } else if (elem.open && !sets.length) {
      collapse(doneAt);
    }
  };
  const groupedSets = groupByExercise(sets);
  return (
    <details
      onToggle={evt => {
        handleOnToggle(evt.target);
      }}
      open={sets.length}
    >
      <summary>
        {name} <small>({doneAt})</small>
      </summary>
      <SetStats sets={sets} />
      <table>
        <tbody>
          {groupedSets &&
            Object.entries(groupedSets).map(([exercise, sets]) => (
              <Set key={exercise} exercise={exercise} sets={sets} />
            ))}
        </tbody>
      </table>
    </details>
  );
};
