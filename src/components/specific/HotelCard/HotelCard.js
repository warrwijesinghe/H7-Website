import React from "react";
import styles from "./HotelCard.module.css";
import { Link } from "react-router-dom";
import arrow from '../../../assets/icons/arrow-right-ico.svg';
import defaultImg from '../../../assets/images/default.jpg';


const HotelCard = ({title, subtitle, desc, logo, image1, image2, image3}) => {
  return (
    
    <div className={styles.hotel_card}>
      <div className={styles.hotel_card_image}>
        <img
          src={logo || defaultImg}
          alt="heaven Seven"
          className={styles.hotel_card_img}
        />
      </div>
      <div className={styles.hotel_card_content}>
        <h1 className={styles.hotel_card_title}>{title}</h1>
        <h5 className={styles.hotel_card_sub}>{subtitle}</h5>
        <p className={styles.hotel_card_description}>
          {desc}
        </p>

        <Link to={`/hotel/${encodeURIComponent(title)}`}  className={styles.hotel_card_explore} >
          <p>Explore More</p>
          <div className={styles.hotel_card_explore_link}>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
      </div>
      <div className={styles.hotel_card_gallery}>
      <div className={styles.hotel_card_gallery_img}>
          <img src={image1 || defaultImg} alt="heaven seven gallery 1" />
        </div>
        <div className={styles.hotel_card_gallery_img}>
          <img src={image2 || defaultImg} alt="heaven seven gallery 1" />
        </div>
        <div className={styles.hotel_card_gallery_img}>
          <img src={image3 || defaultImg} alt="heaven seven gallery 1" />
        </div>
        

        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.active}`}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
