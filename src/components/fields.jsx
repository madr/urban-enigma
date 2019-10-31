import React from "react";
import { RATING_MIN, RATING_MAX, RATING_STEPS } from "../constants";

export const ExerciseField = props => {
  const { value, handleOnChange, choices } = props;
  return (
    <React.Fragment>
      <datalist id="exercises">
        {choices.map(exercise => (
          <option key={exercise}>{exercise}</option>
        ))}
      </datalist>
      <label htmlFor="exercise">Övning</label>
      <input
        id="exercise"
        list="exercises"
        autoComplete="off"
        value={value}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
};

export const NameField = props => {
  const { value, handleOnChange } = props;
  return (
    <React.Fragment>
      <label htmlFor="name">Döp passet</label>
      <input id="name" type="text" value={value} onChange={handleOnChange} />
    </React.Fragment>
  );
};

export const RatingField = props => {
  const { value, handleOnChange } = props;
  return (
    <React.Fragment>
      <label htmlFor="rating">Hur gick det?</label>
      <input
        id="rating"
        type="range"
        min={RATING_MIN}
        max={RATING_MAX}
        pattern="[0-9]*"
        inputMode="numeric"
        value={value}
        onChange={handleOnChange}
        step={RATING_STEPS}
      />
    </React.Fragment>
  );
};

export const RepsField = props => {
  const { handleOnChange, value } = props;
  return (
    <React.Fragment>
      <label htmlFor="reps">Repetitioner</label>
      <input
        id="reps"
        type="number"
        min="1"
        step="1"
        pattern="[0-9]*"
        inputMode="numeric"
        value={value}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
};

export const WeightField = props => {
  const { handleOnChange, value } = props;
  return (
    <React.Fragment>
      <label htmlFor="weight">Vikt</label>
      <input
        id="weight"
        type="number"
        min="2.5"
        step="0.5"
        lang="en-150"
        pattern="[0-9]*"
        inputMode="decimal"
        value={value}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
};

export const IsWarmupField = props => {
  const { handleOnChange, value } = props;
  return (
    <label className="label--checkbox" htmlFor="isWarmup">
      <input
        type="checkbox"
        onChange={handleOnChange}
        checked={value}
        value={false}
        id="isWarmup"
      />
      Uppvärmningsset
    </label>
  );
};

export const WeightRepsFields = props => {
  const { handleOnChange, reps, weight } = props;
  return (
    <div className="fieldset">
      <WeightField value={weight} handleOnChange={handleOnChange} />
      <RepsField value={reps} handleOnChange={handleOnChange} />
    </div>
  );
};
