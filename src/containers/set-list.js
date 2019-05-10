import { connect } from 'react-redux'
import SetList from '../components/set-list'
import { dropSet } from '../actions'

const mapStateToProps = state => ({
    sets: state.sets,
})

const mapDispatchToProps = dispatch => ({
  drop: id => dispatch(dropSet(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetList)