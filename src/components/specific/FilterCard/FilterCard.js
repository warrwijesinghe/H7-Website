import React, { useState } from 'react';
import styles from './FilterCard.module.css';
import Button from '../../common/Button/Button';
import closeIco from "../../../assets/icons/close-ico.svg";
import DropDown from '../../common/DropDown/DropDown';


const FilterCard = () => {
    const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className={styles.filter_section}>
      <div className={styles.filter_group}>
        <DropDown
          label="Hotel"
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          placeholder="Select Hotel"
        />
        {selectedOption && <p>Selected: {selectedOption.label}</p>}
      </div>
      <div className={styles.filter_group}>
        <DropDown
          label="Type"
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          placeholder="Select Type"
        />
        {selectedOption && <p>Selected: {selectedOption.label}</p>}
      </div>
      <div className={styles.filter_clear_button}>

      <Button type="button" variant="transparent" fullWidth={true}>
      <img
          src={closeIco}
          alt="close"
          className={styles.close_ico}
        />
      CLEAR ALL
      </Button>
      </div>
    </div>
  )
}

export default FilterCard
