import React from 'react';
import PropTypes from 'prop-types';

const DisplayElements = ({ children }) => (
  <div>{children}</div>
);

DisplayElements.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DisplayElements;
