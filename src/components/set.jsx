import React from "react";
import { RATING_MAX } from "../constants";

export default props => {
  const { exercise, sets } = props;
  return (
    <React.Fragment>
      <tr>
        <th colSpan="3">{exercise}</th>
      </tr>
      {sets.map(set => (
        <tr key={set.id}>
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
