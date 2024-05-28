import React from 'react';
import styles from './HeroSection.module.css';
import logo from "../../../assets/images/logo-ne.png";
import CheckRateCard from '../../specific/CheckRateCard/CheckRateCard';

const HeroSection = () => {
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
    </div>
  )
}

export default HeroSection;
