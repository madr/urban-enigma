import React from "react";
import { ExerciseField, WeightRepsFields, IsWarmupField } from "./fields";
import saveIcon from "../../svg/floppy-disk.svg";

export default props => {
  const { draft, updateDraft, createSet, exercises, setCount } = props;
  const { exercise, reps, weight, isWarmup } = draft;

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
    <React.Fragment>
      <header>
        <h1>Lägg till set #{setCount + 1}</h1>
        <button type="submit" form="new-set">
          <img src={saveIcon} alt="Spara" />
        </button>
      </header>
      <main>
        <form
          id="new-set"
          className="form"
          onSubmit={handleOnSubmit}
          method="post"
          action=""
        >
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
          <IsWarmupField value={isWarmup} handleOnChange={handleOnChange} />
        </form>
      </main>
    </React.Fragment>
  );
};
