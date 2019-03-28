export const LOAD_EVENTS = 'LOAD_EVENTS'
export const LOAD_EVENTS_OK = 'LOAD_EVENTS_OK'

export const eventsLoadedOk = events => ({
  type: LOAD_EVENTS_OK,
  payload: events,
})
