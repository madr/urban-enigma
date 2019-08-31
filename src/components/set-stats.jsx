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
        <b>{mass}</b> ton
      </li>
      <li>
        <b>{sets.length}</b> set
      </li>
      <li>
        <b>{reps}</b> repetitioner
      </li>
    </ul>
  );
};
