import React from 'react';
import styles from './NewsletterForm.module.css';
import Button from '../../common/Button/Button';

import facebookIco from "../../../assets/icons/facebook-ico.svg";
import linkedinIco from "../../../assets/icons/linkedin-ico.svg";
import instragramIco from "../../../assets/icons/instragram-ico.svg";
import youtubeIco from "../../..//assets/icons/youtube-ico.svg";
import tweetIco from "../../../assets/icons/tweet-ico.svg";

const NewsletterForm = () => {
  return (
    <div>
      <div className={styles.newsletter_form}>
        <h1 className={styles.newsletter_title}>Subscribe Our Newsletter</h1>
        <div className={styles.newsletter_border}></div>
        <p className={styles.newsletter_desc}>
        Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
        </p>
        <div className="grid">
            <input type="email" placeholder='Email' className={styles.form_input} />
        </div>

        <Button type='button' variant='primary-dark' fullWidth={true}>
            SUBSCRIBE
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
    </div>
  )
}

export default NewsletterForm;
