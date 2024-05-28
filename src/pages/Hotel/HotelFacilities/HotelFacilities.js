import React from "react";
import styles from "./HotelFacilities.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";

const HotelFacilities = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.intro_ex_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">All Facilities For You</h1>
          <p className="description mb-sm">
            Welcome to Heaven Seven Hotel, where tranquility meets modern luxury
            in the heart of . Embrace the relaxed atmosphere of our
            free-spirited environment, where every moment is an invitation to
            unwind and enjoy life's simple pleasures. Delight your senses with
            crafted cocktails and lively conversations at our vibrant bar and
            pub, or challenge friends to a friendly game area. With an array of
            entertainment options at your fingertips, including our stylish bar,
            lively pub, and pool game area, you're sure to find your slice of
            paradise at Heaven Seven Hotel
          </p>

          <div className={styles.gallery_grid}>
                
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelFacilities;
