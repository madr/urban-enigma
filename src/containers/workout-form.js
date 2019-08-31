import { connect } from "react-redux";
import WorkoutForm from "../components/workout-form";
import { createWorkout } from "../actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  createWorkout: (name, doneAt) => dispatch(createWorkout(name, doneAt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutForm);
