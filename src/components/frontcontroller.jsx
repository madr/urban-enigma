import React from "react";
import SetForm from "../containers/set-form";
import WorkoutList from "../containers/workout-list";
import OneRepMax from "../components/1rm";

export default props => {
  const { currentView } = props;
  return (
    <React.Fragment>
      {currentView === "new" && (
        <React.Fragment>
          <SetForm />
        </React.Fragment>
      )}
      {currentView === "1rm" && <OneRepMax />}
      {currentView === "history" && <WorkoutList />}
    </React.Fragment>
  );
};
