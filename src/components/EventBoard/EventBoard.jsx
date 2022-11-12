import './eventBoard.css'

export function EventBoard({ events }) {
  return (
    <div className="eventBoard">
      {events.map(event => <div key={event.name}>{event.name}</div>)}
    </div>
  )
}