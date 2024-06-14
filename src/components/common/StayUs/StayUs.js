import React, { useEffect, useState } from 'react';
import styles from './StayUs.module.css';
import facebookIco from "../../../assets/icons/facebook-ico.svg";
import linkedinIco from "../../../assets/icons/linkedin-ico.svg";
import instragramIco from "../../../assets/icons/instragram-ico.svg";
import youtubeIco from "../../..//assets/icons/youtube-ico.svg";
import tweetIco from "../../../assets/icons/tweet-ico.svg";
import EventCard from '../../specific/EventCard/EventCard';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { fetchWebBanners } from '../../../api/apiClient';

const StayUs = () => {
  const [banners, setBanners] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <section className={styles.stay_section}>
        <div className="container">
          <EventCard logo={banners[2].banner_image_urls[0].imgeUrl} isLeft={false}>
            <h1 className={styles.stay_card_title}>{banners[2].displayName || ''}</h1>
            <p className={styles.stay_card_description}>
            {banners[2].description || ''}
            </p>

            <div className={styles.stay_form_grid}>
              <Input type="text" placeholder="RECEIVE NEWSLETTERS AND OFFERS" />
              <Button type="button" variant="primary">
                Submit
              </Button>
            </div>

            <div className={styles.stay_social}>
              <div className={styles.stay_social_ico}>
                <img src={facebookIco} alt="facebook" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={linkedinIco} alt="linkin" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={instragramIco} alt="instagram" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={youtubeIco} alt="youtube" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={tweetIco} alt="tweet" />
              </div>
            </div>
          </EventCard>
        </div>
      </section>
    </div>
  )
}

export default StayUs;
