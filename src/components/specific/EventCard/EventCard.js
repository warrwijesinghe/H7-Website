import React from "react";
import styles from "./EventCard.module.css";
import defaultImg from '../../../assets/images/default.jpg';

const EventCard = ({ logo , isLeft, children}) => {
    const contentClass = `${styles.event_card_content} ${isLeft ? styles.event_card_left_content : styles.event_card_right_content}`;
    const imageClass = `${styles.event_card_image} ${isLeft ? styles.event_card_image_right : styles.event_card_image_left}`;
    
  return (
    <div className={styles.event_card}>
      <div className={contentClass}>
        {children}
      </div>
      <div className={imageClass}>
        <img src={logo || defaultImg} alt="event card" className={styles.event_card_img} />
      </div>
    </div>
  );
};

export default EventCard;
