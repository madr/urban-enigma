import { connect } from "react-redux";
import PasteSet from "../components/paste-set";
import { pasteDraft } from "../actions";

const mapStateToProps = state => ({
  recentSet: state.sets[state.sets.length - 1]
});

const mapDispatchToProps = dispatch => ({
  reuseSet: set => dispatch(pasteDraft(set))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasteSet);
