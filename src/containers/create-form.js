import { connect } from "react-redux";
import CreateForm from "../components/create-form";
import d2s from "../helpers/d2s";

const mapStateToProps = state => {
  const today = d2s(new Date());
  return {
    workoutOngoing: !!state.workouts.filter(workout => workout.doneAt === today)
      .length
  };
};

export default connect(mapStateToProps)(CreateForm);
