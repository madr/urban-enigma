import React from 'react'
import { connect } from 'react-redux'
import EventList from '../components/event-list'

const mapStateToProps = state => ({
    events: state.events,
})

export default connect(mapStateToProps)(EventList)