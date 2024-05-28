import React from "react";
import styles from "./Offers.module.css";
import CheckRateCard from "../../components/specific/CheckRateCard/CheckRateCard";
import logo from "../../assets/images/logo-ne.png";
import EventCard from "../../components/specific/EventCard/EventCard";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";

import facebookIco from "../../assets/icons/facebook-ico.svg";
import linkedinIco from "../../assets/icons/linkedin-ico.svg";
import instragramIco from "../../assets/icons/instragram-ico.svg";
import youtubeIco from "../../assets/icons/youtube-ico.svg";
import tweetIco from "../../assets/icons/tweet-ico.svg";
import OfferCard from "../../components/specific/OfferCard/OfferCard";
import Partners from "../../components/specific/Partners/Partners";

const Offers = () => {
  const offerList = Array.from({ length: 6 });

  return (
    <div>
      <section className={styles.hero_section}>
        <div className={styles.logo}>
          <div>
            <img src={logo} alt="Haven Seven Hotels" />
            <p>Heaven Seven Hotel</p>
          </div>
        </div>
        <CheckRateCard />
      </section>

      <section className={styles.intro_ex_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">Our Special Offers</h1>
          <p className="description mb-sm">
            Welcome to the curated collection of special offers from Heaven
            Seven Hotels. Here, every promotion is thoughtfully designed to
            enhance your stay, delivering exceptional value and unique
            experiences. As we look forward to welcoming new properties into our
            family, take advantage of the exclusive deals that set the stage for
            the expanded luxury and comfort synonymous with Heaven Seven.
            Discover your perfect getaway with us.
          </p>
        </div>
      </section>

      <section className={`text-center ${styles.tours_section}`}>
        <div className="container ">
          <div className="grid col-3">
            {offerList.map((_, index) => (
              <OfferCard
                key={index}
                cardImage="https://picsum.photos/400"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.visit_section}>
        <div className="container text-center">
          <div className={styles.visit_card}>
            <h3 className="heading-tertiary">Visit Haven Seven</h3>
            <p className={styles.visit_card_description}>
              Choosing Heaven Seven Hotels means choosing a memorable
              experience. Browse each of our hotel pages to learn more about
              what makes each property unique and discover the perfect backdrop
              for your next getaway
            </p>
          </div>
        </div>
      </section>

      <Partners />

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
  );
};

export default Offers;
