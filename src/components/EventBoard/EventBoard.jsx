import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
import './eventBoard.css';

export function EventBoard({ events }) {
  return (
    <div className="eventBoard">
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
}

// EventBoard.propTypes = {
//   events: PropTypes.arrayof(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       speaker: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       time: {
//         start: PropTypes.string.isRequired,
//         end: PropTypes.string.isRequired,
//       },
//     }),
//   ),
// };

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    }),
  ),
};
