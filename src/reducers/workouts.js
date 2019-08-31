import { CREATE_SET, CREATE_WORKOUT } from "../actions";

const emptyWorkout = (doneAt, name = "Namnlöst pass") => ({
  name,
  doneAt
});

const workoutExists = (currentState, doneAt) =>
  currentState.filter(workout => workout.doneAt === doneAt).length;

export default (currentState = [], action) => {
  switch (action.type) {
    case CREATE_SET:
      const { doneAt } = action.payload.draft;
      if (workoutExists(currentState, doneAt)) {
        return currentState;
      } else {
        return [...currentState, emptyWorkout(doneAt)];
      }
    case CREATE_WORKOUT:
      const { name } = action.payload;
      if (workoutExists(currentState, action.payload.doneAt)) {
        return currentState;
      } else {
        return [...currentState, emptyWorkout(action.payload.doneAt, name)];
      }
    default:
      return currentState;
  }
};
