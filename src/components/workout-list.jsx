import React from "react";
import Set from "./set";
import Workout from "../containers/workout";
import d2s from "../helpers/d2s";
import { groupByExercise } from "./workout";

export default props => {
  const { workouts, ongoingWorkout } = props;
  const ongoing = groupByExercise(ongoingWorkout);
  return (
    <React.Fragment>
      <h1 hidden>Träningspass</h1>
      {ongoingWorkout && ongoing.length && (
        <table>
          <tbody>
            {Object.entries(ongoing).map(([exercise, sets]) => (
              <Set key={exercise} exercise={exercise} sets={sets} />
            ))}
          </tbody>
        </table>
      )}
      {workouts.map(workout => (
        <Workout key={workout.doneAt} {...workout} />
      ))}
    </React.Fragment>
  );
};
