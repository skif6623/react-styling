import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

export function PageTitle({ text }) {
  return <Title>{text}</Title>;
}

PageTitle.propTypes = {
  text: PropTypes.string,
};
