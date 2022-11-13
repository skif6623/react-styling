import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './event.css';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constans';

export function Event({ name, location, speaker, type, start, end }) {
  const formatedTime = formatEventStart(start);
  const formatedDuration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className="title">{name}</h2>
      <p className="info">
        <FaMapMarkerAlt className="icon" size={iconSize.sm} />
        {location}
      </p>
      <p className="info">
        <FaUserAlt className="icon" size={iconSize.sm} />
        {speaker}
      </p>
      <p className="info">
        <FaCalendarAlt className="icon" size={iconSize.sm} />
        {formatedTime}
      </p>
      <p className="info">
        <FaClock className="icon" size={iconSize.sm} />
        {formatedDuration}
      </p>
      <span className="chip">{type}</span>
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
