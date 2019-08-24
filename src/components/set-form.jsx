import React from "react";
import { RATING_MIN, RATING_MAX, RATING_STEPS } from "../constants";
import { RepsField, WeightField } from "./fields";

export default props => {
  const { draft, updateDraft, createSet, exercises } = props;
  const { exercise, reps, rating, weight } = draft;

  const handleOnChange = evt => {
    const { id: attr, value } = evt.target;
    updateDraft(attr, value);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    if (!!draft.exercise) {
      createSet(draft);
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit} method="post" action="">
      <datalist id="exercises">
        {exercises.map(exercise => (
          <option key={exercise}>{exercise}</option>
        ))}
      </datalist>
      <label htmlFor="reps">Övning</label>
      <input
        id="exercise"
        list="exercises"
        autoComplete="off"
        value={exercise}
        onChange={handleOnChange}
      />
      <WeightField weight={weight} handleOnChange={handleOnChange} />
      <RepsField reps={reps} handleOnChange={handleOnChange} />
      <label htmlFor="rating">Hur gick det?</label>
      <input
        id="rating"
        type="range"
        min={RATING_MIN}
        max={RATING_MAX}
        pattern="[0-9]*"
        inputMode="numeric"
        value={rating}
        onChange={handleOnChange}
        step={RATING_STEPS}
      />
      <div className="form-actions">
        <button type="submit">Spara</button>
      </div>
    </form>
  );
};
