import React from "react";
import Set from "./set";
import Workout from "../containers/workout";
import { groupByExercise } from "./workout";

export default props => {
  const { workouts, ongoingWorkout } = props;
  const ongoing = groupByExercise(ongoingWorkout);
  return (
    <React.Fragment>
      <header>
        <h1>Träningspass</h1>
      </header>
      <main>
        {ongoingWorkout.length !== 0 && (
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
      </main>
    </React.Fragment>
  );
};
