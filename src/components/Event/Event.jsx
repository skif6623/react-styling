import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import './event.css';
import { formatEventStart } from 'utils/formatEventStart';

export function Event({ name, location, speaker, type, start, end }) {
  return (
    <div className="event">
      <h2 className="title">{name}</h2>
      <p className="info">
        <FaMapMarkerAlt className="icon" />
        {location}
      </p>
      <p className="info">
        <FaUserAlt className="icon" />
        {speaker}
      </p>
      <p className="info">
        <FaCalendarAlt className="icon" />
        {formatEventStart(start)}
      </p>
      <p className="info">
        <FaClock className="icon" />
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
