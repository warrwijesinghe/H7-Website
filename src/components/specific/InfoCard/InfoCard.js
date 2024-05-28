import React from 'react';
import styles from './InfoCard.module.css';
import arrow from "../../../assets/icons/arrow-right-ico.svg";


const InfoCard = ({logo, count, title, desc}) => {
  return (
    <div className={styles.info_card}>
      <img src={logo} alt="why stay with us" />

      <div className={styles.info_card_content}>
      <div className={styles.info_card_count}>{count}</div>
      <div className={styles.info_card_title}>{title}</div>
      <div className={styles.info_card_desc}>{desc}</div>

      <button type="button" className={styles.slide_button}>
            <img src={arrow} alt="arrow right" />
          </button>
      </div>
    </div>
  )
}

export default InfoCard
