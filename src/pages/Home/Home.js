import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import logo from "../../assets/images/logo-ne.png";
import map from "../../assets/images/Map.png";
import playIco from "../../assets/icons/video-ico.svg";
import Card from "../../components/specific/Card/Card";
import Button from "../../components/common/Button/Button";
import SliderLeft from "../../components/specific/SliderLeft/SliderLeft";
import OfferCard from "../../components/specific/OfferCard/OfferCard";
import EventCard from "../../components/specific/EventCard/EventCard";
import Partners from "../../components/specific/Partners/Partners";

import arrowHeadRightIco from "../../assets/icons/arrow-head-right-ico.svg";
import arrowHeadLeftIco from "../../assets/icons/arrow-head-left-ico.svg";
import StayUs from "../../components/common/StayUs/StayUs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/custom-slick.css";

import { Link } from "react-router-dom";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import {
  fetchProperties,
  fetchPropertyImage,
  fetchPropertyText,
  fetchWebBanners,
} from "../../api/apiClient";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const [propertyText, setPropertyText] = useState(null);
  const [propertyImages, setPropertyImages] = useState(null);
  const [properties, setProperties] = useState(null);
  const [banners, setBanners] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData, imageData, propertiesData, webBanner] = await Promise.all([
          fetchPropertyText("Group", "Home"),
          fetchPropertyImage("Group", "Gallery", "Gallery", 10),
          fetchProperties(),
          fetchWebBanners("Group", "Home"),
        ]);

        setPropertyText(textData);
        setPropertyImages(imageData);
        setProperties(propertiesData.filter((item) => item.id !== 14));
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

  console.log("text", propertyText);
  console.log("images", propertyImages);
  console.log("properties", properties);
  console.log("banner", banners);

  return (
    <div>
      <HeroSection />
      <div className="container">
        <section className={`text-center ${styles.welcome_section}`}>
          <span className="subheading">
            {propertyText?.welcome_Subheader?.text || ""}
          </span>
          <h1 className="heading-primary">
            {propertyText?.welcome_Header?.text || ""}
          </h1>
          <p className="description">
            {propertyText?.welcome_paragraph_1?.text || ""}
          </p>

          <img
            src={map}
            alt="Tourism map sri lanka"
            className={styles.welcome_img}
          />

          <p className="description">
            {propertyText?.welcome_paragraph_2?.text || ""}
          </p>
          <div className="read_more">
            <p>Read More</p>
          </div>
        </section>

        <section className={styles.about_section}>
          <div className={styles.about_content}>
            <span className="subheading">
              {propertyText?.about_subheader?.text || ""}
            </span>
            <h2 className={styles.about_heading}>
              {propertyText?.about_header?.text || ""}
            </h2>
            <p className={styles.about_description}>
              {propertyText?.about_paragraph_1?.text || ""}
            </p>
            <ul className={styles.about_list}>
              <li>{propertyText?.about_list_1?.text || ""}</li>
              <li>{propertyText?.about_list_2?.text || ""}</li>
              <li>{propertyText?.about_list_3?.text || ""}</li>
            </ul>
          </div>
          <div className={styles.about_image}>
            <img src={playIco} alt="play" />
          </div>
        </section>
      </div>

      <section className={`text-center ${styles.hotels_section}`}>
        <div className={styles.hotel_list}>
          <div className="container ">
            <span className="subheading">Welcome To Haven Seven Hotels</span>
            <h1 className="heading-primary mb-lg">
              Life is short, travel often
            </h1>

            <div className={`d-flex ${styles.mobile_grid}`}>
              {properties &&
                properties.map((item) => (
                  <Card
                    key={item.id}
                    logo={logo}
                    cardImage={item.property_image_urls[0]?.imgeUrl}
                    title={item.shortName}
                    subtitle={item.longName}
                    desc={item.shortDescription}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.experience_section_desktop}>
        <div className="container">
          <div className={styles.experience}>
            <div className="experience_content">
              <h2 className={styles.experience_heading}>{banners[0]?.displayName || ''}</h2>
              <p className={styles.experience_description}>
              {banners[0]?.description || ''}
              </p>
              <Button type="button" variant="primary">
              <Link to={'/experience'}>Explore More</Link>
              </Button>
            </div>
            <div className={styles.experience_slider}>
              <SliderLeft />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.experience_section_mobile}>
        <div className="container text-center">
          <div className="experience_content">
            <h2 className={styles.experience_heading}>{banners[0]?.displayName || ''}</h2>
            <p className={styles.experience_description}>
            {banners[0]?.description || ''}
            </p>
          </div>
          <div>
            <Slider {...settings}>
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
            </Slider>
          </div>
        </div>
      </section>
      <section className={`text-center ${styles.offer_section}`}>
        <div className="container">
          <span className="subheading">Heaven Seven Hotel</span>
          <h1 className="heading-primary mb-lg">Special Offers</h1>
          <div className="desktop">
            <div className={`grid col-3 ${styles.mobile_grid}`}>
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
            </div>
          </div>
          <div className={`mobile`}>
            <Slider {...settings}>
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
            </Slider>
          </div>

          <div className="read_more">
            <Link to={"/special-offers"}>View More</Link>
          </div>
        </div>
      </section>
      <section className={styles.mice_section}>
        <div className="container text-center">
          <span className="subheading">Welcome To Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">MICE Tours</h1>

          <EventCard
            logo={banners[1]?.banner_image_urls[0]?.imgeUrl}
            isLeft={true}
          >
            <h1 className={styles.mice_card_title}>
              {banners[1]?.banner_image_urls[0]?.shortDescription || ''}
            </h1>
            <p className={styles.mice_card_description}>
            {banners[1]?.banner_image_urls[0]?.longDescription || ''}
            </p>
            <Button type="button" variant="primary">
              Explore More
            </Button>

            <button type="button" className={styles.slide_next_btn}>
              <img src={arrowHeadRightIco} alt="next" />
            </button>
            <button type="button" className={styles.slide_prev_btn}>
              <img src={arrowHeadLeftIco} alt="next" />
            </button>
          </EventCard>
        </div>
      </section>
      <section className={styles.home_gallery_section}>
        <div className="text-center">
          <span className="subheading">Welcome To Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">Explore Our Gallery</h1>
          <div className={styles.home_gallery_grid}>
            <div className={styles.home_gallery_grid_item_1}>
              <img
                src={propertyImages[0]?.imgeUrl}
                alt={propertyImages[0]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_2}>
              <img
                src={propertyImages[1]?.imgeUrl}
                alt={propertyImages[1]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_3}>
              <img
                src={propertyImages[2]?.imgeUrl}
                alt={propertyImages[2]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_4}>
              <img
                src={propertyImages[3]?.imgeUrl}
                alt={propertyImages[3]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_5}>
              <img
                src={propertyImages[4]?.imgeUrl}
                alt={propertyImages[4]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_6}>
              <img
                src={propertyImages[5]?.imgeUrl}
                alt={propertyImages[5]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_7}>
              <img
                src={propertyImages[6]?.imgeUrl}
                alt={propertyImages[6]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_8}>
              <img
                src={propertyImages[7]?.imgeUrl}
                alt={propertyImages[7]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_9}>
              <img
                src={propertyImages[8]?.imgeUrl}
                alt={propertyImages[8]?.imgAlt}
                className={styles.home_gallery_img}
              />
            </div>
          </div>
          <div className="read_more">
            <Link to={"/gallery"}>View More</Link>
          </div>
        </div>
      </section>
      <Partners />
      <StayUs />
    </div>
  );
};

export default Home;
