import React from "react";
import { ExerciseField, RatingField, RepsField, WeightField } from "./fields";

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
      <ExerciseField
        value={exercise}
        choices={exercises}
        handleOnChange={handleOnChange}
      />
      <WeightField value={weight} handleOnChange={handleOnChange} />
      <RepsField value={reps} handleOnChange={handleOnChange} />
      <RatingField value={rating} handleOnChange={handleOnChange} />
      <div className="form-actions">
        <button type="submit">Spara</button>
      </div>
    </form>
  );
};
