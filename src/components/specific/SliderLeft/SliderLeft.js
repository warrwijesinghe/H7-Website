import React from "react";
import styles from "./SliderLeft.module.css";
import arrow from "../../../assets/icons/arrow-right-ico.svg";
import arrowHead from "../../../assets/icons/arrow-head-right-ico.svg";

const SliderLeft = () => {
  return (
    <div className={styles.sliders}>
      <div className={styles.slide}>
        <img
          src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
          alt="slider"
          className={styles.slide_image}
        />
        <div className={styles.slide_content}>
          <div className={styles.slide_count}>01</div>
          <p className={styles.slide_description}>Lorem ipsum dolor sit</p>
          <button type="button" className={styles.slide_button}>
            <img src={arrow} alt="arrow right" />
          </button>
        </div>
      </div>
      <div className={styles.next_slide}>
        <div className={styles.next_slider_image}>
          <img
            src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
            alt="slider"
            className={styles.slide_image}
          />
        </div>
        <div className={styles.slide_navigation}>
          <div className={styles.dots}>
            <div className={`${styles.dot} ${styles.active}`}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
      <button type="button" className={styles.slide_next_btn}>
        <img src={arrowHead} alt="next" />
      </button>
    </div>
  );
};

export default SliderLeft;
