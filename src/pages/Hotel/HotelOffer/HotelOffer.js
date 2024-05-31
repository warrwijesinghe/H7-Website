import React from 'react';
import styles from './HotelOffer.module.css';
import HeroSection from '../../../components/common/HeroSection/HeroSection';
import Partners from '../../../components/specific/Partners/Partners';
import OfferCard from '../../../components/specific/OfferCard/OfferCard';
import StayUs from '../../../components/common/StayUs/StayUs';

const HotelOffer = () => {
    const offerList = Array.from({ length: 6 });

  return (
    <div>
      <HeroSection />
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
          <div className={`grid col-3 ${styles.mobile_grid}`}>
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

      <StayUs />
    </div>
  )
}

export default HotelOffer;
