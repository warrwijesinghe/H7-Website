import React from "react";
import styles from "./InfoCard.module.css";
import arrow from "../../../assets/icons/arrow-right-ico.svg";
import defaultImg from "../../../assets/images/default.jpg";
import { Link } from "react-router-dom";

const InfoCard = ({ logo, count, title, desc, alt }) => {
  return (
    <div className={styles.info_card}>
      <img src={logo || defaultImg} alt={alt} />

      <div className={styles.info_card_content}>
        <div className={styles.info_card_count}>{count}</div>
        <div className={styles.info_card_title}>{title}</div>
        <div className={styles.info_card_desc}>{desc}</div>
        <Link to={"/experience"}>
          <button type="button" className={styles.slide_button}>
            <img src={arrow} alt="arrow right" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
