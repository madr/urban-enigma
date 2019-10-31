import React from "react";
import OneRm from "../helpers/1rm";

export default props => {
  const { exercise, sets } = props;
  const orm = sets.reduce((acc, o) => Math.max(OneRm(o.weight, o.reps)), 0);
  console.log(orm);
  return (
    <React.Fragment>
      <tr>
        <th>{exercise}</th>
        <th>
          {orm} kg <small>1rm</small>
        </th>
      </tr>
      {sets.map(set => (
        <tr key={set.id} className={set.isWarmup ? "warmup" : ""}>
          <td>
            <big>{set.reps}</big> reps
          </td>
          <td>
            <big>{set.weight}</big> kg
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};
