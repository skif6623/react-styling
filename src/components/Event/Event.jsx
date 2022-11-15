import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Card, Name, Info, Status } from './Event.styled';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constans';

export function Event({ name, location, speaker, type, start, end }) {
  const formatedTime = formatEventStart(start);
  const formatedDuration = formatEventDuration(start, end);
  return (
    <Card>
      <Name>{name}</Name>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedTime}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {formatedDuration}
      </Info>
      <Status eventType={type}>{type}</Status>
    </Card>
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
