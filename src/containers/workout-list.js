import { connect } from "react-redux";
import WorkoutList from "../components/workout-list";
import d2s from "../helpers/d2s";

const mapStateToProps = state => {
  const today = d2s(new Date());
  return {
    workouts: [...state.workouts].sort((a, b) => a.doneAt < b.doneAt),
    ongoingWorkout: state.sets.filter(s => s.doneAt === today)
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList);
