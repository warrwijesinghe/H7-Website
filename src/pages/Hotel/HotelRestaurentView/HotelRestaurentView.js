import React from "react";
import styles from "./HotelRestaurentView.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import timeIco from '../../../assets/icons/time-ico.svg'
import OfferCard from "../../../components/specific/OfferCard/OfferCard";
import { Link, useParams } from "react-router-dom";
import StayUs from "../../../components/common/StayUs/StayUs";

const HotelRestaurentView = () => {
    let { hotel } = useParams();

  return (
    <div>
      <HeroSection />

      <section className={styles.about_res_section}>
        <div className="container">
          <div className={styles.about_restaurant}>
            <img
              src="https://picsum.photos/400"
              alt="menu ico"
              className={styles.about_res_banner}
            />
            <div className={styles.about_restaurant_content}>
              <h1 className={styles.about_res_title}>
                Nights Dinner Restaurant
              </h1>
              <p className={styles.about_res_desc}>
                ResturantAt a Heaven Seven hotel, hand-crafted cocktails and
                fresh, innovative cuisine immerse you in the art of fine dining,
              </p>
              <p className={styles.about_res_desc}>
                ResturantAt a Heaven Seven hotel, hand-crafted cocktails and
                fresh, innovative cuisine immerse you in the art of fine
                dining,ResturantAt a Heaven Seven hotel, hand-crafted cocktails
                and fresh, innovative cuisine immerse you in the art of fine
                dining,
              </p>
            <div className={`grid col-2 ${styles.mobile_grid_col_2}`}>
            <div className={styles.menu_card}>
              <img src={timeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>DINNER</h1>
                <p>12 : 00 P.M - 1 : 30 P.M</p>
              </div>
            </div>
            <div className={styles.menu_card}>
              <img src={timeIco} alt="menu ico" />
              <div className={styles.menu_card_content}>
                <h1>LUNCH</h1>
                <p>12 : 00 P.M - 1 : 30 P.M</p>
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className={styles.about_restaurant}>
          <img
              src="https://picsum.photos/400"
              alt="menu ico"
              className={styles.gallery_res}
            />
            <img
              src="https://picsum.photos/400"
              alt="menu ico"
              className={styles.gallery_res}
            />
          </div>
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

          <div className="read_more">
            <Link to={`/offers/${hotel}`}>View More</Link>
          </div>
        </div>
      </section>

      <StayUs />
    </div>
  );
};

export default HotelRestaurentView;
