import React from "react";
import styles from "./HotelLocation.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import coffeeIco from "../../../assets/icons/coffee-ico.svg";
import StayUs from "../../../components/common/StayUs/StayUs";
import OfferCard from "../../../components/specific/OfferCard/OfferCard";
import { Link } from "react-router-dom";

const HotelLocation = () => {
  return (
    <div>
      <HeroSection />
      <section className={`text-center ${styles.welcome_section}`}>
        <div className="container">
          <h1 className="heading-primary">Location</h1>
          <p className="description">
            Perched amidst the mist-kissed hills of Nuwara Eliya, our restaurant
            beckons travelers to immerse themselves in the enchanting beauty of
            this highland haven. Surrounded by emerald tea plantations and
            majestic peaks, our location offers a tranquil escape from the
            bustling world below. Just a stone's throw away from iconic
            attractions such as Gregory Lake and Victoria Park, our restaurant
            is the perfect starting point for exploring the charms of Nuwara
            Eliya. With every dish crafted to perfection and every moment
            infused with the serene ambiance of the hills, dining with us
            promises to be a memorable journey into the heart of Sri Lanka's
            hill country.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4070111965875!2d80.76191997412151!3d6.961220593039239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38054d4cc649f%3A0xfb3cd8f551d1d8dc!2sHeaven%20Seven%20Nuwara%20Eliya!5e0!3m2!1sen!2slk!4v1716724373876!5m2!1sen!2slk"
            title="Map of Heaven Seven Nuwara Eliya"
            loading="lazy"
            className={styles.iframe_map}
          ></iframe>

          <div className={styles.restaurant_menu}>
            <div className={styles.menu_card}>
              <img src={coffeeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>Breakfast Time</h1>
                <p>12 : 00 P.M - 1 : 30 P.M</p>
              </div>
            </div>

            <div className={styles.menu_card}>
              <img src={coffeeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>Lunch Time</h1>
                <p>12 : 00 P.M - 1 : 30 P.M</p>
              </div>
            </div>

            <div className={styles.menu_card}>
              <img src={coffeeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>Dinner Time</h1>
                <p>12 : 00 P.M - 1 : 30 P.M</p>
              </div>
            </div>

            <div className={styles.menu_card}>
              <img src={coffeeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>Indoor Seating Capacity</h1>
                <p>180 Persons</p>
              </div>
            </div>

            <div className={styles.menu_card}>
              <img src={coffeeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>Outdoor Seating Capacity</h1>
                <p>180 Persons</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`text-center ${styles.attraction_section}`}>
        <div className="container">
          <h1 className="heading-primary">Most Attractions</h1>

          <div className={styles.attraction}>
            <img src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg" alt="menu ico" />
            <img src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg" alt="menu ico" />
            <img src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg" alt="menu ico" />

            <div className={styles.attraction_content}>
              <h2>Hakgala Gardens</h2>
              <p>
                Stay connected and informed by following us on social media and
                signing up for our newsletter to receive the latest news,
                offers,
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`text-center ${styles.offer_section}`}>
        <div className="container">
          <span className="subheading">Heaven Seven Hotel</span>
          <h1 className="heading-primary mb-lg">Special Offers</h1>

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

          <div className="read_more">
            <Link to={"/offers/heaven-seven"}>View More</Link>
          </div>
        </div>
      </section>
      <StayUs />
    </div>
  );
};

export default HotelLocation;
