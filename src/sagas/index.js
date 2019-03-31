import { put, takeEvery, all, call } from 'redux-saga/effects'
import { LOAD_EVENTS, eventsLoadedOk } from '../actions'

const EVENTS_URL = '/assets/events.json'

export function* loadEventsAsync(action) {
  const { source } = action.payload
  try {
    const data = yield call(() => fetch(source)
      .then(response => response.json())
      .then(data => data), {}
    )
    yield put(eventsLoadedOk(data))
  } catch (error) {
    yield console.error(error)
  }
}

export function* watchLoadEventsAsync() {
  yield takeEvery(LOAD_EVENTS, loadEventsAsync)
}

export default function* () {
  yield all([
    watchLoadEventsAsync()
  ])
}
