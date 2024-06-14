import React from "react";
import styles from "./HotelDining.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import StayUs from "../../../components/common/StayUs/StayUs";
import DiningCard from "../../../components/specific/DiningCard/DiningCard";
import coffeeIco from "../../../assets/icons/coffee-ico.svg";

const HotelDining = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">Our restaurants & bars</h1>
          <p className="description mb-sm">
            At a Heaven Seven hotel, hand-crafted cocktails and fresh,
            innovative cuisine immerse you in the art of fine dining, from our
            Resturant
          </p>

          <div className={`grid col-3 ${styles.grid_card} ${styles.mobile_grid}`}>
            <DiningCard
              cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              title="Nights Dinner Restaurant"
              desc="Indulge in exquisite dishes crafted with the finest ingredients, complemented by an elegant ambiance and impeccable service. Whether you're seeking a romantic dinner for two or a memorable gathering with friends, our restaurant promises an unforgettable dining journey that delights the senses and satisfies the soul"
            />
            <DiningCard
              cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              title="Nights Dinner Restaurant"
              desc="Indulge in exquisite dishes crafted with the finest ingredients, complemented by an elegant ambiance and impeccable service. Whether you're seeking a romantic dinner for two or a memorable gathering with friends, our restaurant promises an unforgettable dining journey that delights the senses and satisfies the soul"
            />
            <DiningCard
              cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              title="Nights Dinner Restaurant"
              desc="Indulge in exquisite dishes crafted with the finest ingredients, complemented by an elegant ambiance and impeccable service. Whether you're seeking a romantic dinner for two or a memorable gathering with friends, our restaurant promises an unforgettable dining journey that delights the senses and satisfies the soul"
            />
          </div>
        </div>
      </section>
      <section className={styles.dining_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">ALL-DAY DINING RESTAURANT</h1>
          <p className="description mb-sm">
            At Heaven Seven, we bring the flavors of the world toshores. ,
            offers a delectable fusion of local delights and international
            favorites. Whether you prefer Night dining or indulging in our
            buffet spread, our skilled chefs are ready to tantalize your taste
            buds with exquisite dishes, With culinary delights available
            throughout the day, we invite you to experience our warm Sri Lankan
            hospitality at Heaven Seven
          </p>

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
          <div className={styles.make_reservation}>
                <h1>MAKE YOUR ONLINE RESERVATION NOW</h1>
                <button className={styles.make_reservation_btn} type="button">RESERVE NOW</button>
          </div>
          <p className={styles.important_desc}>Indulge in an unforgettable dining experience with us. From the first bite to the last, savor every moment.</p>
        </div>
      </section>
      <StayUs />
    </div>
  );
};

export default HotelDining;
