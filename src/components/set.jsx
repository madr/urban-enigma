import React from "react";
import { RATING_MAX } from "../constants";

export default props => {
  const { exercise, rating, reps, weight } = props;
  return (
    <tr>
      <th>{exercise}</th>
      <td>{reps}</td>
      <td>{weight}kg</td>
      <td>
        {rating}/{RATING_MAX}
      </td>
    </tr>
  );
};
