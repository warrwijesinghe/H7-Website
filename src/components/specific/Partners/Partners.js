import React from "react";
import styles from "./Partners.module.css";

const Partners = () => {
  const partners = Array.from({ length: 5 });

  return (
    <div className={styles.partners}>
      <div className="text-center">
        <span className="subheading">Welcome To Haven Seven Hotels</span>
        <h1 className="heading-primary mb-lg">Featured Partners</h1>
        <div className={styles.partner_list}>
          {partners.map((_, index) => (
            <div key={index} className={styles.partner}></div>
          ))}
        </div>
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={`${styles.dot} ${styles.active}`}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
