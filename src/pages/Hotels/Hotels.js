import React, { useEffect, useState } from "react";
import styles from "./Hotels.module.css";
import HotelCard from "../../components/specific/HotelCard/HotelCard";
import EventCard from "../../components/specific/EventCard/EventCard";
import Button from "../../components/common/Button/Button";

import OfferCard from "../../components/specific/OfferCard/OfferCard";
import Partners from "../../components/specific/Partners/Partners";
import InfoCard from "../../components/specific/InfoCard/InfoCard";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import { fetchProperties, fetchPropertyText, fetchWebBanners } from "../../api/apiClient";
import Carousel from "../../components/specific/Carousel/Carousel";
import StayUs from "../../components/common/StayUs/StayUs";

const Hotels = () => {
  const [propertyText, setPropertyText] = useState(null);
  const [properties, setProperties] = useState(null);
  const [banners, setBanners] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData, propertiesData, bannerData] = await Promise.all([
          fetchPropertyText("Group", "Hotels"),
          fetchProperties(),
          fetchWebBanners("Group", "Hotels"),
        ]);

        setPropertyText(textData);
        setProperties(propertiesData.filter((item) => item.id !== 14));
        setBanners(bannerData);
      } catch (err) {
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
  console.log("banner", banners);

  return (
    <div>
      <HeroSection />

      <section className={styles.intro_ex_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">
            {propertyText?.welcome_Header?.text || ""}
          </h1>
          <p className="description mb-sm">
            {propertyText?.welcome_paragraph_1?.text || ""}
          </p>
          <p className="description mb-sm">
            {propertyText?.welcome_paragraph_2?.text || ""}
          </p>
        </div>
      </section>

      {properties &&
        properties.map((item) => (
          <section key={item.id} className={styles.hotels_ex_section}>
            <div className="container">
              <HotelCard
                title={item.shortName}
                subtitle={item.longName}
                desc={item.shortDescription}
                logo={item.property_image_urls[0]?.imgeUrl}
                image1={item.property_image_urls[1]?.imgeUrl}
                image2={item.property_image_urls[2]?.imgeUrl}
                image3={item.property_image_urls[3]?.imgeUrl}
              />
            </div>
          </section>
        ))}

      <section className={styles.why_stay_section}>
        <div className="container text-center">
          <span className="subheading">{banners[0]?.description || ''}</span>
          <h1 className="heading-primary mb-lg">{banners[0]?.displayName || ''}</h1>

          <div className="desktop">
            <div className={`grid col-3 ${styles.mobile_grid}`}>
            {banners &&
              banners[0].banner_image_urls
              .map((item, index) => (
                <InfoCard
                logo={item.imgeUrl}
                alt={item.imgAlt}
                count={'0'+(index+1)}
                title={item.shortDescription}
                desc={item.longDescription}
              />
                ))}
              
              
            </div>
          </div>
          <div className="mobile">
            <Carousel>
            {banners &&
              banners[0].banner_image_urls
              .map((item, index) => (
                <InfoCard
                logo={item.imgeUrl}
                alt={item.imgAlt}
                count={'0'+(index+1)}
                title={item.shortDescription}
                desc={item.longDescription}
              />
                ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className={styles.book_info_section}>
        <div className="container text-center">
          <EventCard
            logo={banners[1]?.banner_image_urls[0]?.imgeUrl}
            isLeft={true}
          >
            <h1 className={styles.book_info_title}>{banners[1]?.displayName || ''}</h1>
            <p className={styles.book_info_description}>
            {banners[1]?.description || ''}
            </p>
            <Button type="button" variant="primary">
              Book Now
            </Button>
          </EventCard>
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
          <div className="mobile">
            <Carousel>
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
            </Carousel>
          </div>
        </div>
      </section>

      <Partners />

      <StayUs />
    </div>
  );
};

export default Hotels;
