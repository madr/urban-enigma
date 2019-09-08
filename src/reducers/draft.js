import { UPDATE_DRAFT, CREATE_SET } from "../actions";
import nanoid from "nanoid";
import d2s from "../helpers/d2s";

export const emptyDraft = () => ({
  id: nanoid(),
  exercise: "",
  reps: 5,
  rating: 3,
  weight: 20,
  doneAt: d2s(new Date()),
  isWarmup: false
});

export default (currentState = emptyDraft(), action) => {
  switch (action.type) {
    case UPDATE_DRAFT:
      const { attr, value } = action.payload;
      const changeset = {};
      changeset[attr] = value;
      return {
        ...currentState,
        ...changeset
      };
    case CREATE_SET:
      return emptyDraft();
    default:
      return currentState;
  }
};
