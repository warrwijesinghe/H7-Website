import React, { useEffect, useState } from "react";
import styles from "./HotelGallery.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import StayUs from "../../../components/common/StayUs/StayUs";
import Card from "../../../components/specific/Card/Card";
import playIco from "../../../assets/icons/video-ico.svg";
import logo from "../../../assets/images/logo-ne.png";
import Partners from "../../../components/specific/Partners/Partners";
import { useParams } from "react-router-dom";
import { fetchProperties, fetchPropertyImage, fetchPropertyText } from "../../../api/apiClient";
import FilterCard from "../../../components/specific/FilterCard/FilterCard";

const HotelGallery = () => {
  let { hotel } = useParams();

  const [propertyText, setPropertyText] = useState(null);
  const [propertyImages, setPropertyImages] = useState(null);
  const [properties, setProperties] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData, imageData, propertiesData] = await Promise.all([
          fetchPropertyText(hotel, "Gallery"),
          fetchPropertyImage(hotel, "Gallery", "Gallery", 6),
          fetchProperties(),
        ]);

        setPropertyText(textData);
        setPropertyImages(imageData);
        setProperties(propertiesData.filter((item) => item.id !== 14));
      } catch (err) {
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



  return (
    <div>
      <HeroSection />

      <section className={styles.gallery_welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">
            {propertyText?.welcome_Header?.text || ""}
          </h1>
          <p className="description mb-sm">
            {propertyText?.welcome_paragraph_1?.text || ""}
          </p>
        </div>
      </section>

      <FilterCard />

      <section className={styles.gallery_grid_section}>
        <div className="container text-center">
          <div className={styles.gallery_grid}>
            <div className={styles.gallery_grid_Item_1}>
              <h3 className={styles.gallery_grid_title}>Images Gallery</h3>
              <div className={styles.gallery_grid_Item_img}>
                <img
                  src={propertyImages[0]?.imgeUrl}
                  alt={propertyImages[0]?.imgAlt}
                  className={styles.gallery_grid_img}
                />
              </div>
            </div>
            <div className={styles.gallery_grid_Item_2}>
              <img
                src={propertyImages[1]?.imgeUrl}
                alt={propertyImages[1]?.imgAlt}
                className={styles.gallery_grid_img}
              />
            </div>
            <div className={styles.gallery_grid_Item_3}>
              <img
                src={propertyImages[2]?.imgeUrl}
                alt={propertyImages[2]?.imgAlt}
                className={styles.gallery_grid_img}
              />
            </div>
          </div>
          <div className="read_more">
            <p>Load More</p>
          </div>
        </div>
      </section>

      <section className={styles.gallery_grid_section}>
        <div className="container text-center">
          <div className={styles.gallery_grid}>
            <div className={styles.gallery_grid_Item_1}>
              <h3 className={styles.gallery_grid_title}>Video Gallery</h3>
              <div className={styles.gallery_grid_Item_img}>
                <img
                  src={propertyImages[4]?.imgeUrl}
                  alt={propertyImages[4]?.imgAlt}
                  className={styles.gallery_grid_img}
                />
                <img
                  src={playIco}
                  alt="play icon"
                  className={styles.gallery_grid_play}
                />
              </div>
            </div>
            <div className={styles.gallery_grid_Item_2}>
              <img
                src={propertyImages[5]?.imgeUrl}
                alt={propertyImages[5]?.imgAlt}
                className={styles.gallery_grid_img}
              />
              <img
                src={playIco}
                alt="play icon"
                className={styles.gallery_grid_play}
              />
            </div>
            <div className={styles.gallery_grid_Item_3}>
              <img
                src={propertyImages[6]?.imgeUrl}
                alt={propertyImages[6]?.imgAlt}
                className={styles.gallery_grid_img}
              />
              <img
                src={playIco}
                alt="play icon"
                className={styles.gallery_grid_play}
              />
            </div>
          </div>
          <div className="read_more">
            <p>Load More</p>
          </div>
        </div>
      </section>

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

      <Partners />

      <StayUs />
    </div>
  );
};

export default HotelGallery;
