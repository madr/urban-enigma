import React from "react";
import Workout from "../containers/workout";

export default props => {
  const { workouts } = props;
  return (
    <React.Fragment>
      <h1>Workouts</h1>
      {workouts.map(workout => (
        <Workout key={workout.doneAt} {...workout} />
      ))}
    </React.Fragment>
  );
};
