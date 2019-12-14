import React from "react";
import CreateForm from "../containers/create-form";
import EditForm from "../components/edit-form";
import Workouts from "../containers/workout-list";
import OneRepMax from "./formulas";

export default props => {
  const { currentView } = props;
  return (
    <React.Fragment>
      {currentView === "new" && <CreateForm />}
      {currentView === "edit" && <EditForm />}
      {currentView === "1rm" && <OneRepMax />}
      {currentView === "history" && <Workouts />}
    </React.Fragment>
  );
};
