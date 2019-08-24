import React from "react";
import Set from "./set";
import SetStats from "./set-stats";

export default props => {
  const { doneAt, name, sets, collapse, fold } = props;
  const handleOnToggle = elem => {
    if (!elem.open && sets.length) {
      fold(doneAt);
    } else if (elem.open && !sets.length) {
      collapse(doneAt);
    }
  };
  return (
    <details
      onToggle={evt => {
        handleOnToggle(evt.target);
      }}
      open={sets.length}
    >
      <summary>{doneAt}</summary>
      <SetStats sets={sets} />
      <table>
        <tbody>{sets && sets.map(st => <Set key={st.id} {...st} />)}</tbody>
      </table>
    </details>
  );
};
