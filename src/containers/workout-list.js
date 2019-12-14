import { connect } from "react-redux";
import WorkoutList from "../components/workout-list";
import d2s from "../helpers/d2s";

const mapStateToProps = state => {
  const today = d2s(new Date());
  return {
    workouts: [...state.workouts].sort((a, b) =>
      a.doneAt < b.doneAt ? 1 : -1
    ),
    ongoingWorkout: state.sets.filter(s => s.doneAt === today).reverse()
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList);
