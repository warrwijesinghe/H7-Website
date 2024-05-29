import React from "react";
import styles from "./RoomCard.module.css";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";

const RoomCard = ({ cardImage, title, room, hotel="nuwara" }) => {
  return (
    <Link to={`/room/${hotel}/${room}`}>
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
          <h1 className={styles.card_number}>{room}</h1>
          <div className={styles.card_button}>
            <Button type="button" variant="primary" fullWidth={true}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
