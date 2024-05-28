import React, { useState } from "react";
import styles from "./FaqItem.module.css";
import downloadIco from "../../../assets/icons/download-ico.svg";

const FaqItem = ({ title, disc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={styles.faq_title}>
        <h1>{title}</h1>
        <img src={downloadIco} alt="download" onClick={toggleVisibility} />
      </div>
      {isVisible && (
        <div className={styles.faq_value}>
          <p className={styles.faq_description}>{disc}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
