import React from "react";
import styles from "./DiningCard.module.css";
import Button from "../../common/Button/Button";
import { Link, useParams } from "react-router-dom";

const DiningCard = ({ cardImage, title, desc}) => {
  let { hotel } = useParams();
  return (
    <div className={styles.card}>
      <div className={styles.card_logo}>
        <img
          src={cardImage}
          alt="Haven Seven Hotels"
          className={styles.card_image}
        />
        
      </div>
      <div className={styles.card_body}>
        <h4 className={styles.card_title}>{title}</h4>

        <p className={styles.card_description}>{desc}</p>

        <div className={styles.card_button}>
        <Link to={`/restaurant/${hotel}/${title}`}>
          <Button type="button" variant="primary" fullWidth={true}>
            Discover more
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiningCard;
