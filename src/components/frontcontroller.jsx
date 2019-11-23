import React from "react";
import CreateForm from "../containers/create-form";
import Workouts from "../containers/workout-list";
import OneRepMax from "./formulas";

export default props => {
  const { currentView } = props;
  return (
    <React.Fragment>
      {currentView === "new" && <CreateForm />}
      {currentView === "1rm" && <OneRepMax />}
      {currentView === "history" && <Workouts />}
    </React.Fragment>
  );
};
