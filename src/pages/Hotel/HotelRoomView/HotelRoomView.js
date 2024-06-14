import React from "react";
import styles from "./HotelRoomView.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import Button from "../../../components/common/Button/Button";
import RoomCard from "../../../components/specific/RoomCard/RoomCard";

const HotelRoomView = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.room_grid_section}>
        <div className="container">
          <div className={styles.room_grid}>
            <img
              src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              alt="room banner"
              className={styles.room_banner}
            />
            <div className={styles.room_content}>
              <div className={styles.room_content_item_list}>
                <div className={styles.room_content_item}>
                  <span>2</span>GUESTS
                </div>
                <div className={styles.room_content_item}>
                  <span>Queen</span>BED SIZE
                </div>
                <div className={styles.room_content_item}>
                  <span>14m²</span>ROOM SIZE
                </div>
              </div>
              <h1 className={styles.room_title}>FEATURES</h1>
              <div className={styles.feature_group}>
                <ul className={styles.features}>
                  <li>Free WI-FI</li>
                  <li>Air conditioning</li>
                  <li>Courtesy tea and coffee</li>
                  <li>Luxury toiletries</li>
                  <li>Hairdryer</li>
                  <li>Jacuzzi towels</li>
                  <li>Silk bathrobe and slippers</li>
                  <li>Safe</li>
                </ul>

                <ul className={styles.features}>
                  <li>Mini-bar</li>
                  <li>Maid service daily</li>
                  <li>Laundry service</li>
                  <li>Evening turndown service</li>
                  <li>Luxury cotton bedding</li>
                  <li>Located on the second floor</li>
                </ul>
              </div>

              <Button type="button" variant="primary">
                Book Now
              </Button>
            </div>
          </div>
          <p className="description text-center">
            Welcome to the curated collection of special offers from Heaven
            Seven Hotels. Here, every promotion is thoughtfully designed to
            enhance your stay, delivering exceptional value and unique
            experiences. As we look forward to welcoming new properties into our
            family, take advantage of the exclusive deals that set the stage for
            the expanded luxury and comfort synonymous with Heaven Seven.
            Discover your perfect getaway with us.
          </p>

          <div className="grid col-2">
            <img
              src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              alt="room banner"
              className={styles.room_image}
            />
            <img
              src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              alt="room banner"
              className={styles.room_image}
            />
          </div>
          <div className={styles.room_btn}>
            <Button type="button" variant="primary">
              Book Now
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.rooms_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">Explore Our Rooms</h1>

          <div className="grid col-3">
            <RoomCard
              cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              title="Double Dulx Room 01"
              room={104}
            />
            <RoomCard
              cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              title="Double Dulx Room 01"
              room={104}
            />
            <RoomCard
              cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              title="Double Dulx Room 01"
              room={104}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelRoomView;
