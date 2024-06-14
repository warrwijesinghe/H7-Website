import React from "react";
import styles from "./Card.module.css";
import Button from "../../common/Button/Button";

const Card = ({ cardImage, logo, title, subtitle, desc, button = false, tag = false, isFullWidth= false }) => {
  return (
    <div className={`${styles.card} ${isFullWidth ? styles.full_width : ''}`}>
      <div className={styles.card_logo}>
        <img
          src={cardImage}
          alt="Haven Seven Hotels"
          className={styles.card_image}
        />
        <img
          src={logo}
          alt="Haven Seven Hotels"
          className={styles.card_brand_logo}
        />
      </div>
      <div className={styles.card_body}>
        <h4 className={styles.card_title}>{title}</h4>
        <h4 className={styles.card_subtitle}>{subtitle}</h4>

        <p className={styles.card_description}>{desc}</p>

        {button && (<div className={styles.card_button}>
          <Button type="button" variant="primary" fullWidth={true}>
            EXPLORE
          </Button>
        </div>)}
      </div>
      {tag && <div className={styles.card_tag}>
        TOUR
      </div>}
    </div>
  );
};

export default Card;
