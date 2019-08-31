import React from "react";
import WorkoutForm from "../containers/workout-form";
import SetForm from "../containers/set-form";

export default props => {
  const { workoutOngoing } = props;
  if (workoutOngoing) {
    return <SetForm />;
  } else {
    return <WorkoutForm />;
  }
};
