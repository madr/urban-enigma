import { connect } from 'react-redux'
import FrontController from '../components/frontcontroller'

const mapStateToProps = state => ({
    currentView: state.currentView,
})

export default connect(mapStateToProps)(FrontController)