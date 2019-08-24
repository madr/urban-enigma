import { CREATE_SET } from "../actions";

const emptyWorkout = doneAt => ({
  name: "Namnlöst pass",
  doneAt
});

export default (currentState = [], action) => {
  switch (action.type) {
    case CREATE_SET:
      const { doneAt } = action.payload.draft;
      if (currentState.filter(workout => workout.doneAt === doneAt).length) {
        return currentState;
      } else {
        return [...currentState, emptyWorkout(doneAt)];
      }
    default:
      return currentState;
  }
};
