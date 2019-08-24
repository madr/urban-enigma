import { combineReducers } from "redux";
import draft from "./draft";
import exercises from "./exercises";
import sets from "./sets";
import currentView from "./current-view";

export default combineReducers({
  currentView,
  exercises,
  sets,
  draft
});
