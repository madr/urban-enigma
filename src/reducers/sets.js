import { CREATE_SET, DROP_SET } from "../actions";

export default (currentState = [], action) => {
  switch (action.type) {
    case CREATE_SET:
      return [...currentState, action.payload.draft];
    case DROP_SET:
      return currentState.filter(set => set.id !== action.payload.id);
    default:
      return currentState;
  }
};
