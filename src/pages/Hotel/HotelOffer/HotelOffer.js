import React, { useEffect, useState } from 'react';
import styles from './HotelOffer.module.css';
import HeroSection from '../../../components/common/HeroSection/HeroSection';
import Partners from '../../../components/specific/Partners/Partners';
import OfferCard from '../../../components/specific/OfferCard/OfferCard';
import StayUs from '../../../components/common/StayUs/StayUs';
import { fetchPropertyText, fetchWebBanners } from '../../../api/apiClient';
import defaultImg from '../../../assets/images/default.jpg';
import { useParams } from 'react-router-dom';
import FilterCard from '../../../components/specific/FilterCard/FilterCard';

const HotelOffer = () => {
  let { hotel } = useParams();

    const offerList = Array.from({ length: 6 });
    const [propertyText, setPropertyText] = useState(null);
    const [banners, setBanners] = useState(null);
  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [textData,bannerData] = await Promise.all([
            fetchPropertyText(hotel, 'Special Offer'),
            fetchWebBanners(hotel, "Special Offer"),
          ]);
  
          setPropertyText(textData);
          setBanners(bannerData);
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
  
    console.log('text', propertyText)
    const visitBannerStyle = {
      'background-image': `url('${banners[0]?.banner_image_urls[0]?.imgeUrl || defaultImg}')`,
      'background-size': 'cover',
      'background-position': 'center center'
    }
    return (
      <div>
        <HeroSection />
  
        <section className={styles.intro_ex_section}>
          <div className="container text-center">
            <h1 className="heading-secondary">{propertyText?.welcome_Header?.text || ''}</h1>
            <p className="description mb-sm">
            {propertyText?.welcome_paragraph_1?.text || ''}
            </p>
          </div>
        </section>
  
        <FilterCard />
  
        <section className={`text-center ${styles.tours_section}`}>
          <div className="container ">
            <div className={`grid col-3 ${styles.mobile_grid}`}>
              {offerList.map((_, index) => (
                <OfferCard
                  key={index}
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="A Limited Time Hikkaduwa"
                  desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
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
