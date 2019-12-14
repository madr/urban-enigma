import { CREATE_SET, DROP_SET, UPDATE_SET } from "../actions";

export default (currentState = [], action) => {
  switch (action.type) {
    case CREATE_SET:
      return [...currentState, action.payload.draft];
    case UPDATE_SET:
      return currentState.map(set => {
        const { id: setId } = set;
        const { id: draftId } = action.payload.draft;
        if (setId === draftId) {
          return action.payload.draft;
        }
        return set;
      });
    case DROP_SET:
      return currentState.filter(set => set.id !== action.payload.id);
    default:
      return currentState;
  }
};
