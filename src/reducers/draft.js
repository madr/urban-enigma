import {
  UPDATE_DRAFT,
  EDIT_SET,
  PASTE_DRAFT,
  CREATE_SET,
  UPDATE_SET,
  CREATE_WORKOUT
} from "../actions";
import nanoid from "nanoid";
import d2s from "../helpers/d2s";

const KEYS = ["exercise", "reps", "weight", "doneAt", "isWarmup"];
const IMPORT_KEYS = ["id", "doneAt", ...KEYS];
let changeset = {};

export const forceType = (attr, value) => {
  if (attr === "weight") {
    return parseFloat(value);
  } else if (attr === "reps") {
    return parseInt(value, 10);
  }
  return value;
};

export const emptyDraft = () => ({
  id: nanoid(),
  exercise: "",
  reps: "",
  rating: 3,
  weight: "",
  doneAt: d2s(new Date()),
  isWarmup: false
});

export default (currentState = emptyDraft(), action) => {
  switch (action.type) {
    case UPDATE_DRAFT:
      const { attr, value } = action.payload;
      changeset = {};
      changeset[attr] = forceType(attr, value);
      return {
        ...currentState,
        ...changeset
      };
    case CREATE_SET:
      return emptyDraft();
    case UPDATE_SET:
      return emptyDraft();
    case CREATE_WORKOUT:
      return emptyDraft();
    case PASTE_DRAFT:
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
    case EDIT_SET:
      IMPORT_KEYS.forEach(k => {
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
