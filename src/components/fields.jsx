import React from "react";

export const RepsField = props => {
  const { handleOnChange, reps } = props;
  return (
    <React.Fragment>
      <label htmlFor="reps">Repetitioner</label>
      <input
        id="reps"
        type="number"
        min="1"
        max="50"
        step="1"
        pattern="[0-9]*"
        inputMode="numeric"
        value={reps}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
};

export const WeightField = props => {
  const { handleOnChange, weight } = props;
  return (
    <React.Fragment>
      <label htmlFor="weight">Vikt</label>
      <input
        id="weight"
        type="number"
        min="2.5"
        max="300"
        step="2.5"
        lang="en-150"
        pattern="[0-9]*"
        inputMode="decimal"
        value={weight}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
};
