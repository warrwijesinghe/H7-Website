import React, { useState } from "react";
import styles from "./SliderLeft.module.css";
import arrow from "../../../assets/icons/arrow-right-ico.svg";
import arrowHead from "../../../assets/icons/arrow-head-right-ico.svg";
import defaultImg from '../../../assets/images/default.jpg';

const SliderLeft = ({experiences}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = experiences;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };



  return (
    <div className={styles.sliders}>
      <div className={styles.slide}>
        <img
          src={slides[currentSlide]?.experiences_image_urls[0]?.imgeUrl || defaultImg}
          alt={slides[currentSlide]?.experiences_image_urls[0]?.imgAlt || ''}
          className={styles.slide_image}
        />
        <div className={styles.slide_content}>
          <div className={styles.slide_count}>{`0${(currentSlide+1)}`}</div>
          <p className={styles.slide_description}>{slides[currentSlide].shortDescription}</p>
          <button type="button" className={styles.slide_button}>
            <img src={arrow} alt="arrow right" />
          </button>
        </div>
      </div>
      {slides.length > 1 && (
        <>
        <div className={styles.next_slide}>

        <div className={styles.next_slider_image}>
          <img
            src={slides[(currentSlide + 1) % slides.length]?.experiences_image_urls[0]?.imgeUrl || defaultImg}
            alt={slides[(currentSlide + 1) % slides.length]?.experiences_image_urls[0]?.imgAlt || ''}
            className={styles.slide_image}
          />
        </div>
        <div className={styles.slide_navigation}>
        <div className={styles.dots}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <button type="button" className={styles.slide_next_btn} onClick={handleNextSlide}>
        <img src={arrowHead} alt="next" />
      </button>
      </>
    )}
    </div>
  );
};

export default SliderLeft;
