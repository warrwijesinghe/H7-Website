import React from 'react';
import styles from './StayUs.module.css';
import facebookIco from "../../../assets/icons/facebook-ico.svg";
import linkedinIco from "../../../assets/icons/linkedin-ico.svg";
import instragramIco from "../../../assets/icons/instragram-ico.svg";
import youtubeIco from "../../..//assets/icons/youtube-ico.svg";
import tweetIco from "../../../assets/icons/tweet-ico.svg";
import EventCard from '../../specific/EventCard/EventCard';
import Input from '../Input/Input';
import Button from '../Button/Button';

const StayUs = () => {
  return (
    <div>
      <section className={styles.stay_section}>
        <div className="container">
          <EventCard logo="https://picsum.photos/800" isLeft={false}>
            <h1 className={styles.stay_card_title}>Stay with Us</h1>
            <p className={styles.stay_card_description}>
              Stay connected and informed by following us on social media and
              signing up for our newsletter to receive the latest news, offers,
              and insights directly from Heaven Seven Hotels.
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
