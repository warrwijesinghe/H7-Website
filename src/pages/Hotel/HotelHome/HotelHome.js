import React, { useEffect, useState } from "react";
import styles from "./HotelHome.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import OfferCard from "../../../components/specific/OfferCard/OfferCard";
import EventCard from "../../../components/specific/EventCard/EventCard";
import Button from "../../../components/common/Button/Button";
import Partners from "../../../components/specific/Partners/Partners";
import StayUs from "../../../components/common/StayUs/StayUs";
import { Link, useParams } from "react-router-dom";
import Carousel from "../../../components/specific/Carousel/Carousel";
import Card from "../../../components/specific/Card/Card";
import logo from "../../../assets/images/logo-ne.png";
import {
  fetchExperiences,
  fetchOffers,
  fetchProperties,
  fetchPropertyImage,
  fetchPropertyText,
  fetchWebBanners,
} from "../../../api/apiClient";
import defaultImg from "../../../assets/images/default.jpg";

const HotelHome = () => {
  let { hotel } = useParams();

  const [propertyText, setPropertyText] = useState(null);
  const [propertyImages, setPropertyImages] = useState(null);
  const [properties, setProperties] = useState(null);
  const [banners, setBanners] = useState(null);
  const [locExperiences, setLocExperiences] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [offers, setOffers] = useState(null);
  const [restImages, setRestImages] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          textData,
          imageData,
          propertiesData,
          webBanner,
          experienceLocData,
          experienceData,
          offerData,
          restaurantData,
        ] = await Promise.all([
          fetchPropertyText(hotel, "Home"),
          fetchPropertyImage(hotel, "Gallery", "Gallery", 10),
          fetchProperties(),
          fetchWebBanners(hotel, "Home"),
          fetchExperiences("Location", hotel),
          fetchExperiences("Group", hotel),
          fetchOffers(hotel, "Group"),
          fetchPropertyImage(hotel, "Gallery", "Restaurant", 4),
        ]);

        setPropertyText(textData);
        setPropertyImages(imageData);
        setProperties(propertiesData.filter((item) => item.id !== 14));
        setBanners(webBanner);
        setLocExperiences(experienceLocData);
        setExperiences(experienceData);
        setOffers(offerData);
        setRestImages(restaurantData);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hotel]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  
  const filterHotel = properties.find(
    (property) => property.shortName === hotel
  );

  return (
    <div>
      <HeroSection />
      <section className={styles.welcome_section}>
        <div className="container">
          <div className={styles.welcome_grid}>
            <div className={styles.welcome_content}>
              <span className="subheading">
                {propertyText?.welcome_Subheader?.text || ""}
              </span>
              <h1 className={styles.welcome_title}>
                Heaven Seven <br /> {propertyText?.welcome_Header?.text || ""}
              </h1>
              <p className={styles.welcome_description}>
                {propertyText?.welcome_paragraph_1?.text || ""}
              </p>
              <div className={styles.welcome_logo}>
                <img src={logo} alt="heaven seven logo" />
              </div>
            </div>
            <div className={styles.welcome_image}>
              <img
                src={filterHotel?.property_image_urls[0]?.imgeUrl || defaultImg}
                alt={
                  filterHotel?.property_image_urls[0]?.imgAlt || "banner image"
                }
                className={styles.welcome_banner}
              />
            </div>
          </div>

          <div className={styles.welcome_gallery}>
            <div className={styles.left_gallery}>
              <img
                src={propertyImages[0]?.imgeUrl || defaultImg}
                alt={propertyImages[0]?.imgAlt}
                className={styles.gallery_img}
              />
              <img
                src={propertyImages[1]?.imgeUrl || defaultImg}
                alt={propertyImages[1]?.imgAlt}
                className={styles.gallery_img}
              />
            </div>
            <div className={styles.right_gallery}>
              <img
                src={propertyImages[2]?.imgeUrl || defaultImg}
                alt={propertyImages[2]?.imgAlt}
                className={styles.gallery_img}
              />
              <img
                src={propertyImages[3]?.imgeUrl || defaultImg}
                alt={propertyImages[3]?.imgAlt}
                className={styles.gallery_img}
              />
            </div>
          </div>
          <div className="grid read_more">
            <Link to={"/special-offers"}>View Gallery</Link>
          </div>
        </div>
      </section>
      <section className={styles.dining_section}>
        <div className="container text-center">
          <div className={`grid col-2 ${styles.mobile_dining}`}>
            <div className={styles.dining_banner}>
              <img
                src={restImages[0]?.imgeUrl || defaultImg}
                alt={restImages[0]?.imgAlt}
              />
            </div>
            <div className={styles.dining_content}>
              <h1 className="heading-secondary mb-lg">
                {propertyText?.secondary_header?.text || ""}
              </h1>
              <p className={styles.welcome_description}>
                {propertyText?.secondary_paragraph_1?.text || ""}
              </p>

              <div className="grid read_more">
                <Link to={"/special-offers"}>Explore More</Link>
              </div>
            </div>
          </div>
          <div className={styles.dining_gallery}>
            <div className={styles.dining_gallery_image}>
              <img
                src={restImages[1]?.imgeUrl || defaultImg}
                alt={restImages[1]?.imgAlt}
              />
            </div>
            <div className={styles.dining_gallery_image}>
              <img
                src={restImages[2]?.imgeUrl || defaultImg}
                alt={restImages[2]?.imgAlt}
              />
            </div>
            <div className={styles.dining_gallery_image}>
              <img
                src={restImages[3]?.imgeUrl || defaultImg}
                alt={restImages[3]?.imgAlt}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.experience_explore}>
        <div className="container text-center">
          <span className="subheading">Lorem ipsum dolor sit amet.</span>
          <h1 className="heading-primary mb-lg">Explore Nuwara Eliya</h1>
          <div className="desktop">
            <div className="grid col-3">
              {locExperiences &&
                locExperiences.map((item, index) => (
                  <Card
                    key={index}
                    logo={logo}
                    cardImage={
                      item.experiences_image_urls[0]?.imgeUrl || defaultImg
                    }
                    title={item.displayName}
                    subtitle={item.shortDescription}
                    desc={item.longDescription}
                    tag={true}
                    tagName={item.experiences_type.type}
                    button={true}
                    isFullWidth={true}
                  />
                ))}
            </div>
          </div>
          <div className="mobile">
            <Carousel>
              {locExperiences &&
                locExperiences.map((item, index) => (
                  <Card
                    key={index}
                    logo={logo}
                    cardImage={
                      item.experiences_image_urls[0]?.imgeUrl || defaultImg
                    }
                    title={item.displayName}
                    subtitle={item.shortDescription}
                    desc={item.longDescription}
                    tag={true}
                    tagName={item.experiences_type.type}
                    button={true}
                    isFullWidth={true}
                  />
                ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className={styles.experience_section}>
        <div className="container text-center">
          <span className="subheading">Lorem ipsum dolor sit amet.</span>
          <h1 className="heading-primary mb-lg">Heaven Seven Experience</h1>
          <div className="desktop">
            <div className="grid col-3">
              {experiences &&
                experiences.map((item, index) => (
                  <Card
                    key={index}
                    logo={logo}
                    cardImage={
                      item.experiences_image_urls[0]?.imgeUrl || defaultImg
                    }
                    title={item.displayName}
                    subtitle={item.shortDescription}
                    desc={item.longDescription}
                    tag={true}
                    tagName={item.experiences_type.type}
                    button={true}
                    isFullWidth={true}
                  />
                ))}
            </div>
          </div>
          <div className="mobile">
            <Carousel>
              {experiences &&
                experiences.map((item, index) => (
                  <Card
                    key={index}
                    logo={logo}
                    cardImage={
                      item.experiences_image_urls[0]?.imgeUrl || defaultImg
                    }
                    title={item.displayName}
                    subtitle={item.shortDescription}
                    desc={item.longDescription}
                    tag={true}
                    tagName={item.experiences_type.type}
                    button={true}
                    isFullWidth={true}
                  />
                ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className={styles.book_info_section}>
        <div className="container text-center">
          <EventCard
            logo={banners[0].banner_image_urls[0]?.imgeUrl || defaultImg}
            isLeft={true}
          >
            <h1 className={styles.book_info_title}>
              {banners[0].displayName || ""}
            </h1>
            <p className={styles.book_info_description}>
              {banners[0].description || ""}
            </p>
            <Button type="button" variant="primary">
              Book Now
            </Button>
          </EventCard>
        </div>
      </section>

      {offers.length !== 0 && (
        <section className={`text-center ${styles.offer_section}`}>
          <div className="container">
            <span className="subheading">Heaven Seven Hotel</span>
            <h1 className="heading-primary mb-lg">Special Offers</h1>
            <div className="desktop">
              <div className={`grid col-3  ${styles.mobile_grid}`}>
                {offers &&
                  offers.map((item, index) => (
                    <OfferCard
                      key={index}
                      cardImage={item.offer_image_urls[0]?.imgeUrl}
                      title={item.displayName}
                      desc={item.longDescription}
                      valid={item.validityText}
                    />
                  ))}
              </div>
            </div>

            <div className="mobile">
              <Carousel>
                {offers &&
                  offers.map((item, index) => (
                    <OfferCard
                      key={index}
                      cardImage={item.offer_image_urls[0]?.imgeUrl}
                      title={item.displayName}
                      desc={item.longDescription}
                      valid={item.validityText}
                    />
                  ))}
              </Carousel>
            </div>

            <div className="read_more">
              <Link to={"/offers/heaven-seven"}>View More</Link>
            </div>
          </div>
        </section>
      )}

      <Partners />
      <StayUs />
    </div>
  );
};

export default HotelHome;
