import React from "react";
import styles from "./OfferView.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import Button from "../../../components/common/Button/Button";
import OfferCard from "../../../components/specific/OfferCard/OfferCard";

const OfferView = () => {
  return (
    <div>
      <HeroSection />

      <section className={styles.welcome_section}>
        <div className="container">
        <h1 className="heading-secondary">Exclusive Offers</h1>
          <div className={styles.offer_grid}>
            <img
              src="https://picsum.photos/400"
              alt="banner"
              className={styles.logo_section}
            />
            <div className={styles.offer_content}>
              <h1 className={styles.offer_title}>A Limited Time Hikkaduwa</h1>
              <p className={styles.offer_description}>
                Dive into your summer adventure, with free transfers and your
                choice of 2 Book Direct Benefits.
              </p>

              <div className={styles.offer_card_grid}>
                <div className={styles.offer_card}>
                <div>

                  <h1 className={styles.offer_card_title}>Book between</h1>
                  <p className={styles.offer_card_description}>
                    10 MAY - 31 MAY 2024.
                  </p>
                </div>
                </div>

                <div className={styles.offer_card}>
                  <h1 className={styles.offer_card_title}>15% OFF</h1>
                </div>
              </div>

              <li className={styles.offer_condition}>Terms and Conditions</li>
              <h2 className={styles.offer_rate}>Rates starting from $ 219</h2>

              <Button type="button" variant="primary">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`text-center ${styles.offer_section}`}>
        <div className="container">
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
    </div>
  );
};

export default OfferView;
