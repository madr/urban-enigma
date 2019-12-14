import { connect } from "react-redux";
import { collapseWorkout, foldWorkout, editSet, dropSet } from "../actions";
import Workout from "../components/workout";

const mapStateToProps = (state, ownProps) => {
  return {
    sets: state.foldedWorkouts.find(doneAt => doneAt === ownProps.doneAt)
      ? state.sets.filter(set => set.doneAt === ownProps.doneAt)
      : []
  };
};

const mapDispatchToProps = dispatch => ({
  collapse: doneAt => dispatch(collapseWorkout(doneAt)),
  edit: draft => dispatch(editSet(draft)),
  drop: draft => dispatch(dropSet(draft)),
  fold: doneAt => dispatch(foldWorkout(doneAt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workout);
