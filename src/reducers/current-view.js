import { SET_CURRENT_VIEW } from "../actions";

export default (currentState = "new", action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return action.payload.slug;
    default:
      return currentState;
  }
};
