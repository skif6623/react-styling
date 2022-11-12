import './pageTitle.css'
import PropTypes from 'prop-types'

export function PageTitle({text}) {
  return (
    <h1 className="title">{text}</h1>
  )
}

PageTitle.propTypes = {
  text: PropTypes.string
}
