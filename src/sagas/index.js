import { put, takeEvery, all } from 'redux-saga/effects'

export function* loadEventsAsync() {
  yield put({ type: 'LOAD_EVENTS_OK' })
}

export function* watchLoadEventsAsync() {
  yield takeEvery('LOAD_EVENTS', loadEventsAsync)
}

export default function* () {
  yield all([
    watchLoadEventsAsync()
  ])
}
