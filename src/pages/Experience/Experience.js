import React from "react";
import styles from "./Experience.module.css";
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
import Card from "../../components/specific/Card/Card";

const Experience = () => {
  const tours = Array.from({ length: 6 });

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
          <h1 className="heading-secondary">Our Experiences</h1>
          <p className="description mb-sm">
            Welcome to Heaven Seven Hotels, where we offer a diverse array of
            experiences designed to enrich your stay and immerse you in the
            culture and natural beauty of our surroundings. Discover the
            tranquility of nature walks, the thrill of game driving, and the joy
            of rural bike explorations. Challenge yourself with a game of pool,
            or dive into the local cuisine with our cooking classes and
            exquisite dining options. Each day trip and adventure is curated to
            ensure you capture the essence of our destinations and create
            memories that last a lifetime. Join us and transform your travel
            into a journey of discovery and delight
          </p>
        </div>
      </section>

      <section className={`text-center ${styles.tours_section}`}>
        <div className="container ">
          <div className="grid col-3">
            {tours.map((_, index) => (
              <Card
                key={index}
                logo={logo}
                cardImage="https://picsum.photos/400"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`text-center ${styles.offer_section}`}>
        <div className="container">
          <span className="subheading">Heaven Seven Hotel</span>
          <h1 className="heading-primary mb-lg">Special Offers</h1>

          <div className="grid col-3">
            <OfferCard
              cardImage="https://picsum.photos/400"
              title="A Limited Time Hikkaduwa"
              desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
            />
            <OfferCard
              cardImage="https://picsum.photos/400"
              title="A Limited Time Hikkaduwa"
              desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
            />
            <OfferCard
              cardImage="https://picsum.photos/400"
              title="A Limited Time Hikkaduwa"
              desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
            />
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

export default Experience;
