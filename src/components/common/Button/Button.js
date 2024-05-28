import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false, fullWidth = false} ) => {

  const buttonFullWidth = `${fullWidth ? styles.fullWidth : ''}`;
  
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${buttonFullWidth}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'primary-dark', 'primary-outline']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Button;
