import React from "react";
import styles from "./OfferCard.module.css";
import Button from "../../common/Button/Button";
import offerIco from "../../../assets/images/offer.png";
import defaultImg from "../../../assets/images/default.jpg";

const OfferCard = ({ cardImage, title, desc, valid }) => {
  return (
    <div className={styles.offer_card}>
      <div className={styles.offer_card_logo}>
        <img
          src={cardImage || defaultImg}
          alt="Haven Seven Hotels"
          className={styles.offer_card_image}
        />

        <div className={styles.offer_card_offer}>
          <div className={styles.offer}>
            <h4>50% Off</h4>
          </div>
          <img
            src={offerIco}
            alt="Haven Seven Hotels"
            className={styles.offer_image}
          />
        </div>
      </div>
      <div className={styles.offer_card_body}>
        <h4 className={styles.offer_card_title}>{title}</h4>

        <p className={styles.offer_card_description}>{desc}</p>

        <div className="grid">
          <Button type="button" variant="primary-dark">
            GET NOW
          </Button>
        </div>

        <p className={styles.offer_card_valid}>Valid {valid}</p>
      </div>
    </div>
  );
};

export default OfferCard;
