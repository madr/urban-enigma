import React from 'react'

const prettyDate = (startedAt, endedAt) => {
  return startedAt
}

const Concert = props => {
  const {
    startedAt,
    supports,
    record,
    venue,
  } = props
  const date = prettyDate(startedAt)
  return (
    <ul>
      <li>Konsert på {venue} den {date}</li>
      <li>Förband: <strong>{supports}</strong></li>
      <li>Aktuellt album: <i>{record}</i></li>
    </ul>
  )
}

const Festival = props => {
  const {
    bands,
    missed,
    startedAt,
    type,
    venue,
  } = props
  const date = prettyDate(startedAt)
  const bandList = bands
    .map(band => <strong>{band}</strong>)
    .join(', ')
  const missedList = missed
    .map(band => <strong>{band}</strong>)
    .join(', ')
  return (
    <ul>
      <li>{type} i {venue} den {date}</li>
      <li>Personliga höjdpunkter: {bandList}</li>
      <li>Band jag missade: {missedList}</li>
    </ul>
  )
}

const Event = props => {
  const {
    title,
    type,
  } = props
  let data = ''
  console.log(type)
  if (type.match(/festival/i) || type.match(/kryssning/i)) {
    data = <Festival {...props} />
  } else {
    data = <Concert {...props} />
  }
  return (
    <article className="event">
      <h2>{title}</h2>
      {data}
    </article>
  )
}

export default Event