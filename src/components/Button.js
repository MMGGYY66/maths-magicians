import React, { } from 'react';

import PropTypes from 'prop-types';

const Button = ({
  children, onClick, color = '#e0e0e0', size,
}) => {
  const col = children === '=' ? '#F5913E' : color;
  return (
    <button onClick={onClick} type="button" style={{ width: size === 'xl' && '240px', backgroundColor: col }}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: '#e0e0e0',
  size: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
