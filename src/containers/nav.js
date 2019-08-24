import { connect } from "react-redux";
import Nav from "../components/nav";
import { setCurrentView } from "../actions";

const mapDispatchToProps = dispatch => ({
  goto: slug => dispatch(setCurrentView(slug))
});

export default connect(
  null,
  mapDispatchToProps
)(Nav);
