import { connect } from "react-redux";
import WorkoutList from "../components/workout-list";

const mapStateToProps = state => ({
  workouts: state.workouts
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList);
