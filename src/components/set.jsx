import React from "react";
import { RATING_MAX } from "../constants";

export default props => {
  const { exercise, sets } = props;
  return (
    <React.Fragment>
      <tr>
        <th colspan="3">{exercise}</th>
      </tr>
      {sets.map(set => (
        <tr>
          <td>
            <big>{set.reps}</big> reps
          </td>
          <td>
            <big>{set.weight}</big> kg
          </td>
          <td>
            <big>{set.rating}</big>/{RATING_MAX}
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};
