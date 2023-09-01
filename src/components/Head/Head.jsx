import PropTypes from 'prop-types';

export const Head = ({ clas, id, data, children }) => {
  return <p className={clas} id={id}>
    I am Head
  </p>
}

Head.propTypes = {
  clas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.array,
}