import React from "react";

export default props => {
  const { sets, drop } = props;
  return (
    <div className="sets">
      <table>
        <tbody>
          {sets.map(set => (
            <tr key={set.id}>
              <td>
                <button type="button" onClick={() => drop(set.id)}>
                  x
                </button>
              </td>
              <td>{set.exercise}</td>
              <td>{set.weight}</td>
              <td>{set.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
