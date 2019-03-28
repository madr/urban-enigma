import { LOAD_EVENTS_OK } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_EVENTS_OK:
      const events = action.payload
      return events
    default:
      return state
  }
}