import { combineReducers } from "redux";
import currentView from "./current-view";
import foldedWorkouts from "./folded-workouts";
import draft from "./draft";
import exercises from "./exercises";
import sets from "./sets";
import workouts from "./workouts";

export default combineReducers({
  currentView,
  exercises,
  foldedWorkouts,
  sets,
  workouts,
  draft // needs to be reduced after "sets"
});
