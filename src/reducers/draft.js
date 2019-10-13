import {
  UPDATE_DRAFT,
  COPY_DRAFT,
  CREATE_SET,
  CREATE_WORKOUT
} from "../actions";
import nanoid from "nanoid";
import d2s from "../helpers/d2s";

const KEYS = ["exercise", "reps", "weight", "doneAt", "isWarmup"];
let changeset = {};

export const emptyDraft = () => ({
  id: nanoid(),
  exercise: "",
  reps: 0,
  rating: 3,
  weight: 0,
  doneAt: d2s(new Date()),
  isWarmup: false
});

export default (currentState = emptyDraft(), action) => {
  switch (action.type) {
    case UPDATE_DRAFT:
      const { attr, value } = action.payload;
      changeset = {};
      changeset[attr] = value;
      return {
        ...currentState,
        ...changeset
      };
    case CREATE_SET:
      return emptyDraft();
    case CREATE_WORKOUT:
      return emptyDraft();
    case COPY_DRAFT:
      changeset = {};
      KEYS.forEach(k => {
        const value = action.payload[k];
        if (value !== undefined) {
          changeset[k] = value;
        }
      });
      return {
        ...currentState,
        ...changeset
      };
    default:
      return currentState;
  }
};
