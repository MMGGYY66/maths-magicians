import React from 'react';
import PropTypes from 'prop-types';

function Screen({ children }) {
  return <div>{children}</div>;
}

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
