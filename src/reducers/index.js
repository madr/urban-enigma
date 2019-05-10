import { combineReducers } from 'redux'
import draft from './draft'
import exercises from './exercises'
import sets from './sets'

export default combineReducers({
  exercises,
  sets,
  draft,
})