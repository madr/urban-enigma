import React from "react";
import OneRm from "../helpers/1rm";
import binIcon from "../../svg/bin.svg";
import pencilIcon from "../../svg/pencil.svg";

export default props => {
  const { exercise, sets, edit, drop } = props;
  const orm = sets.reduce(
    (acc, o) => Math.max(OneRm(o.weight, o.reps), acc),
    0
  );
  return (
    <React.Fragment>
      <tr>
        <th>{exercise}</th>
        <th colSpan="2">
          {orm} kg <small>1rm</small>
        </th>
      </tr>
      {sets
        .sort((a, b) => (a.isWarmup < b.isWarmup ? 1 : 0))
        .map(set => (
          <tr key={set.id} className={set.isWarmup ? "warmup" : ""}>
            <td>
              <big>{set.reps}</big> reps
            </td>
            <td>
              <big>{set.weight}</big> kg
            </td>
            <td>
              <button type="button" onClick={() => drop(set.id)}>
                <img src={binIcon} alt="Ta bort" />
              </button>
              <button type="button" onClick={() => edit(set)}>
                <img src={pencilIcon} alt="Ändra" />
              </button>
            </td>
          </tr>
        ))}
    </React.Fragment>
  );
};
