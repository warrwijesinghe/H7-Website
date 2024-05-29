import React from "react";
import styles from "./Hotels.module.css";
import CheckRateCard from "../../components/specific/CheckRateCard/CheckRateCard";
import logo from "../../assets/images/logo-ne.png";
import map from "../../assets/images/Map.png";
import HotelCard from "../../components/specific/HotelCard/HotelCard";
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
import InfoCard from "../../components/specific/InfoCard/InfoCard";

const Hotels = () => {
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
          <h1 className="heading-secondary">Visit Now, Our Hotels</h1>
          <p className="description mb-sm">
            Welcome to the select realm of Heaven Seven Hotels, where every
            location is a reflection of our dedication to providing guests with
            an exceptional stay. As you peruse 'Our Hotels' page, we encourage
            you to uncover the distinct allure and personalized hospitality that
            each of our hotels offers.
          </p>
          <p className="description mb-sm">
            Here, we blend the essence of local charm with the comforts of
            modern luxury, ensuring that whether your travels are for leisure or
            business, every hotel in our collection promises an experience that
            is both enriching and unforgettable
          </p>

          <img
            src={map}
            alt="Tourism map sri lanka"
            className={styles.intro_img}
          />

          <p className="description">
            With a vision that reaches beyond the extraordinary, Heaven Seven
            Hotels is on a path of growth, aspiring to introduce new properties
            that will broaden our portfolio and invite travelers to a wider
            array of destinations. As we grow, this page will be your guide to
            the evolving landscapes and enriched experiences that await in our
            current and future sanctuaries of hospitality.Join us on a journey
            of discovery and luxury at Heaven Seven Hotels, where every visit is
            more than a stay—it is a journey to be savored.
          </p>
        </div>
      </section>

      <section className={styles.hotels_ex_section}>
        <div className="container">
          <HotelCard
            title="Hotel Kandy"
            subtitle="Lorem ipsum dolor sit amet,"
            desc="Here, we blend the essence of local charm with the comforts of modern luxury, ensuring that whether your travels are for leisure or business, every hotel in our collection promises an experience that is both enriching and unforgettable"
            logo="https://picsum.photos/400"
            image1="https://picsum.photos/400"
            image2="https://picsum.photos/400"
            image3="https://picsum.photos/400"
          />
        </div>
      </section>

      <section className={styles.hotels_ex_section}>
        <div className="container">
          <HotelCard
            title="Hotel Nuwara Eliya"
            subtitle="Lorem ipsum dolor sit amet,"
            desc="Here, we blend the essence of local charm with the comforts of modern luxury, ensuring that whether your travels are for leisure or business, every hotel in our collection promises an experience that is both enriching and unforgettable"
            logo="https://picsum.photos/400"
            image1="https://picsum.photos/400"
            image2="https://picsum.photos/400"
            image3="https://picsum.photos/400"
          />
        </div>
      </section>

      <section className={styles.hotels_ex_section}>
        <div className="container">
          <HotelCard
            title="Hotel Hikkaduwa"
            subtitle="Lorem ipsum dolor sit amet,"
            desc="Here, we blend the essence of local charm with the comforts of modern luxury, ensuring that whether your travels are for leisure or business, every hotel in our collection promises an experience that is both enriching and unforgettable"
            logo="https://picsum.photos/400"
            image1="https://picsum.photos/400"
            image2="https://picsum.photos/400"
            image3="https://picsum.photos/400"
          />
        </div>
      </section>

      <section className={styles.why_stay_section}>
        <div className="container text-center">
          <span className="subheading">Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">Why Stay With Us</h1>

          <div className={`grid col-3 ${styles.mobile_grid}`}>
            <InfoCard
              logo="https://picsum.photos/400"
              count="01"
              title="Unparalleled Comfor."
              desc="Our rooms are designed to provide luxury and comfort, with plush bedding, state-of-the-art amenities, and breathtaking views."
            />
            <InfoCard
              logo="https://picsum.photos/400"
              count="01"
              title="Exceptional Service."
              desc="Our staff is dedicated to making your stay as enjoyable as possible, with personalized service that caters to all your needs."
            />
            <InfoCard
              logo="https://picsum.photos/400"
              count="01"
              title="Diverse Dining."
              desc="Each hotel boasts a variety of dining options, offering everything from local delicacies to international favorites."
            />
          </div>
        </div>
      </section>

      <section className={styles.book_info_section}>
        <div className="container text-center">
          <EventCard logo="https://picsum.photos/800" isLeft={true}>
            <h1 className={styles.book_info_title}>Book Your Stay</h1>
            <p className={styles.book_info_description}>
              Choosing Heaven Seven Hotels means choosing a memorable
              experience. Browse each of our hotel pages to learn more about
              what makes each property unique and discover the perfect backdrop
              for your next getaway
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

          <div className={`grid col-3 ${styles.mobile_grid}`}>
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

export default Hotels;
