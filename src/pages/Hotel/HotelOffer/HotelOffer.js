import React, { useEffect, useState } from "react";
import styles from "./HotelOffer.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import Partners from "../../../components/specific/Partners/Partners";
import OfferCard from "../../../components/specific/OfferCard/OfferCard";
import StayUs from "../../../components/common/StayUs/StayUs";
import {
  fetchOffers,
  fetchPropertyText,
  fetchWebBanners,
} from "../../../api/apiClient";
import defaultImg from "../../../assets/images/default.jpg";
import { useParams } from "react-router-dom";
import FilterCard from "../../../components/specific/FilterCard/FilterCard";

const HotelOffer = () => {
  let { hotel } = useParams();

  const [propertyText, setPropertyText] = useState(null);
  const [banners, setBanners] = useState(null);
  const [offers, setOffers] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData, bannerData, offerData] = await Promise.all([
          fetchPropertyText(hotel, "Special Offer"),
          fetchWebBanners(hotel, "Special Offer"),
          fetchOffers(hotel, "Group"),
        ]);

        setPropertyText(textData);
        setBanners(bannerData);
        setOffers(offerData);
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


  const visitBannerStyle = {
    backgroundImage: `url('${
      banners[0]?.banner_image_urls[0]?.imgeUrl || defaultImg
    }')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
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
        </div>
      </section>

      <FilterCard />

      <section className={`text-center ${styles.tours_section}`}>
        <div className="container ">
          <div className={`grid col-3 ${styles.mobile_grid}`}>
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
      </section>

      <section className={styles.visit_section} style={visitBannerStyle}>
        <div className="container text-center">
          <div className={styles.visit_card}>
            <h3 className="heading-tertiary">{banners[0]?.displayName}</h3>
            <p className={styles.visit_card_description}>
              {banners[0]?.description}
            </p>
          </div>
        </div>
      </section>

      <Partners />

      <StayUs />
    </div>
  );
};

export default HotelOffer;
