import React from "react";
import { ExerciseField, WeightRepsFields, IsWarmupField } from "./fields";
import PasteSet from "../containers/paste-set";
import saveIcon from "../../svg/floppy-disk.svg";
import { updateSet } from "../actions";

export default props => {
  const {
    draft,
    updateDraft,
    createSet,
    updateSet,
    exercises,
    setCount,
    edit
  } = props;
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
      if (edit) {
        updateSet(draft);
      } else {
        createSet(draft);
      }
    }
  };

  return (
    <React.Fragment>
      <header>
        {!edit && (
          <React.Fragment>
            <h1>Lägg till set #{setCount + 1}</h1>
            <span>
              <PasteSet />
              <button type="submit" form="set-form">
                <img src={saveIcon} alt="Spara" />
              </button>
            </span>
          </React.Fragment>
        )}
        {edit && (
          <React.Fragment>
            <h1>Uppdatera set</h1>
            <span>
              <button type="submit" form="set-form">
                <img src={saveIcon} alt="Spara" />
              </button>
            </span>
          </React.Fragment>
        )}
      </header>
      <main>
        <form
          id="set-form"
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
