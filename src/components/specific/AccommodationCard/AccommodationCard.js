import React from "react";
import styles from "./AccommodationCard.module.css";
import dropIco from "../../../assets/icons/drop-down-ico.svg";

const AccommodationCard = ({logo, title, subtitle, description, isLeft}) => {
  const contentClass = `${styles.card_content} ${isLeft ? styles.card_content_left : styles.card_content_right}`;
  const imageClass = `${styles.card_image} ${isLeft ? styles.card_image_right : styles.card_image_left}`;
  const featureClass = `${styles.card_feature} ${isLeft ? styles.card_feature_right : styles.card_feature_left}`;

  return (
    <div>
      <div className={styles.card}>
        <div className={imageClass}>
          <img src={logo} alt="welcome logo" />
        </div>
        <div className={contentClass}>
          <h1 className={styles.card_title}>{title}</h1>
          <p className={styles.card_subtitle}>{subtitle}</p>
          <p className={styles.card_description}>
            {description}
          </p>
        </div>
        <div className={featureClass}>
          <ul>
            <li>Lorem ipsum dolor sit amTo be</li>
            <li>a top-tier luxury</li>
            <li>hospitality provider in SriLanka,</li>
            <li>known globally for our innovative services,</li>
            <li>exceptional care, and eco-friendly practices,</li>
          </ul>

          <div className={styles.card_footer}>
            <li>
            <img src={dropIco} alt="arrow" className={styles.right_icon} />
            Reserve this room
            </li>
            <li>
            <img src={dropIco} alt="arrow" className={styles.right_icon} />
            More Details
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
