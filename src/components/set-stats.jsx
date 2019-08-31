import React from "react";

export default props => {
  const { sets } = props;
  const reps = sets.reduce((acc, st) => acc + parseInt(st.reps, 10), 0);
  const mass =
    sets.reduce(
      (acc, st) => acc + parseFloat(st.weight, 10) * parseInt(st.reps, 10),
      0
    ) / 1000;
  return (
    <ul>
      <li>
        <b>{mass}</b> ton lyftes
      </li>
      <li>
        <b>{reps}</b> repetitioner utfördes
      </li>
    </ul>
  );
};
