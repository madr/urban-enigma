import { connect } from "react-redux";
import SetForm from "../components/set-form";
import { updateDraft, createSet } from "../actions";

const mapStateToProps = state => ({
  draft: state.draft,
  exercises: state.exercises
});

const mapDispatchToProps = dispatch => ({
  updateDraft: (attr, value) => dispatch(updateDraft(attr, value)),
  createSet: draft => dispatch(createSet(draft))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetForm);
