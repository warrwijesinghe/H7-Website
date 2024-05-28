import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DropDown.module.css';

const DropDown = ({ 
  label = '', 
  options, 
  selectedOption = null, 
  onSelect, 
  placeholder = 'Select an option' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.DropDown}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.DropDownHeader} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : <span className={styles.placeholder}>{placeholder}</span>}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={styles.DropDownList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.DropDownItem}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default DropDown;
