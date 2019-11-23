import { connect } from "react-redux";
import SetForm from "../components/set-form";
import { updateDraft, createSet } from "../actions";
import d2s from "../helpers/d2s";

const mapStateToProps = state => ({
  draft: state.draft,
  exercises: state.exercises,
  setCount: state.sets.filter(s => s.doneAt === d2s(new Date())).length
});

const mapDispatchToProps = dispatch => ({
  updateDraft: (attr, value) => dispatch(updateDraft(attr, value)),
  createSet: draft => dispatch(createSet(draft))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetForm);
