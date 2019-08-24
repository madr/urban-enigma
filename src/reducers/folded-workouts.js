import { COLLAPSE_WORKOUT, FOLD_WORKOUT } from "../actions";

export default (currentState = [], action) => {
  switch (action.type) {
    case COLLAPSE_WORKOUT:
      return currentState.find(da => da === action.payload.doneAt)
        ? currentState
        : [...currentState, action.payload.doneAt];
    case FOLD_WORKOUT:
      return currentState.filter(da => da !== action.payload.doneAt);
    default:
      return currentState;
  }
};
