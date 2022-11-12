import PropTypes from 'prop-types';
import './event.css';

export function Event({ name, location, speaker, type, start, end }) {
  return (
    <div className="event">
      <h2 className="title">{name}</h2>
      <p className="info">
        <i className="icon"></i>
        {location}
      </p>
      <p className="info">
        <i className="icon"></i>
        {speaker}
      </p>
      <p className="info">
        <i className="icon"></i>
        {start}
      </p>
      <p className="info">
        <i className="icon"></i>
        Duration
      </p>
      {/* <span className="chip free|paid|vip">Event type</span> */}
    </div>
  );
  // body
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
