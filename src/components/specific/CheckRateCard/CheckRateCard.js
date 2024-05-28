import React, { useState } from "react";
import styles from "./CheckRateCard.module.css";
import DropDown from "../../common/DropDown/DropDown";
import Button from "../../common/Button/Button";

const CheckRateCard = () => {
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
    <div className={styles.check_rate}>
      <div className={styles.rate_filter}>
        <DropDown
          label="Country"
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          placeholder="Select Country"
        />
        {selectedOption && <p>Selected: {selectedOption.label}</p>}
      </div>
      <div className={styles.rate_filter}>
        <DropDown
          label="City"
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          placeholder="Select City"
        />
        {selectedOption && <p>Selected: {selectedOption.label}</p>}
      </div>
      <div className={styles.rate_filter}>
        <DropDown
          label="Hotel"
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          placeholder="Select Hotel"
        />
        {selectedOption && <p>Selected: {selectedOption.label}</p>}
      </div>
      <div className={styles.rate_filter}>
        <h1 className={styles.rate_filter_label}>Check - In</h1>
        <h1 className={styles.rate_filter_value}>Fri , Apr 24</h1>
      </div>
      <div className={styles.rate_filter}>
      <h1 className={styles.rate_filter_label}>Check - Out</h1>
        <h1 className={styles.rate_filter_value}>Wen , Apr 24</h1>
      </div>
      <div className={styles.rate_filter}>
      <h1 className={styles.rate_filter_label}>Room(s) and Guest(s)</h1>
        <h1 className={styles.rate_filter_value}>1 Room - 2 Guests</h1>
      </div>
      <div className={styles.rate_check_button}>

      <Button type="button" variant="primary" fullWidth={true}>
      CHECK RATES
      </Button>
      </div>
    </div>
  );
};

export default CheckRateCard;
