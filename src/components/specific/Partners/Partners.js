import React, { useEffect, useRef, useState } from "react";
import styles from "./Partners.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/custom-slick.css";
import defaultImg from '../../../assets/images/default.jpg';
import { fetchWebBanners } from "../../../api/apiClient";

const Partners = () => {
  const [banners, setBanners] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mainSlider = useRef(null);
  const navSlider = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [webBanner] = await Promise.all([
          fetchWebBanners("Group", "Home"),
        ]);

        setBanners(webBanner);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  

  const navSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: mainSlider.current,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 3000,
          asNavFor: mainSlider.current,
        },
      },
    ],
  };

  return (
    <div className={styles.partners}>
      <div className="text-center">
        <span className="subheading">Welcome To Haven Seven Hotels</span>
        <h1 className="heading-primary mb-lg">Featured Partners</h1>

        <div className={styles.partner_list}>
          <Slider {...navSettings} ref={navSlider}>
            {banners && banners[3]?.banner_image_urls.map((item, index) => (
              <div key={index} className={styles.partner}>
                <img src={item.imgeUrl || defaultImg} alt={item.imgAlt} />
              </div>
            ))}
          </Slider>
        </div>

        {/* <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={`${styles.dot} ${styles.active}`}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div> */}
      </div>
    </div>
  );
};

export default Partners;
