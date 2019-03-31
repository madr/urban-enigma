import React from 'react'
import Event from './event'

const EventList = props => {
  const { events } = props
  const data = events.map(event => <Event key={event.title} {...event} />)
  return (
    <div className="events">
      {data}
    </div>
  )
}

export default EventList