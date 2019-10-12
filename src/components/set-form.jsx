import React from "react";
import {
  ExerciseField,
  RatingField,
  WeightRepsFields,
  IsWarmupField
} from "./fields";

export default props => {
  const { draft, updateDraft, createSet, exercises } = props;
  const { exercise, reps, rating, weight, isWarmpup } = draft;

  const handleOnChange = evt => {
    const { id: attr, value, checked, type } = evt.target;
    if (type === "checkbox") {
      updateDraft(attr, checked);
    } else {
      updateDraft(attr, value);
    }
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    if (!!draft.exercise) {
      createSet(draft);
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit} method="post" action="">
      <ExerciseField
        value={exercise}
        choices={exercises}
        handleOnChange={handleOnChange}
      />
      <WeightRepsFields
        reps={reps}
        weight={weight}
        handleOnChange={handleOnChange}
      />
      <IsWarmupField value={isWarmpup} handleOnChange={handleOnChange} />
      <div className="form-actions">
        <button type="submit">Spara</button>
      </div>
    </form>
  );
};
