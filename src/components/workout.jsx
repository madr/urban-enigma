import React from "react";
import Set from "./set";
import SetStats from "./set-stats";

const groupByExercise = sets =>
  sets.reduce((acc, set) => {
    const { exercise, weight, reps, rating, id } = set;
    if (!acc[exercise]) {
      acc[exercise] = [{ weight, reps, rating, id }];
    } else {
      acc[exercise] = [...acc[exercise], { weight, reps, rating, id }];
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
  console.log(groupedSets);
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
