import React from "react";
import styles from "./FooterHotel.module.css";
import logo from "../../../assets/images/logo-ne.png";
import apple from "../../../assets/icons/Symbol.svg";
import android from "../../../assets/icons/play-store-ico.svg";
import facebook from "../../../assets/icons/fill-facebook-ico.svg";
import intagram from "../../../assets/icons/fill-intagram-ico.svg";
import linkdin from "../../../assets/icons/fill-linkdin-ico.svg";
import tweet from "../../../assets/icons/fill-tweet-ico.svg";
import { Link } from "react-router-dom";

const FooterHotel = () => {
  return (
    <div>
      <footer className={styles.footer_section}>
        <div className={`${styles.footer} container`}>
          <div className={styles.footer_content}>
            <img src={logo} alt="Heaven Seven" className={styles.footer_logo} />
            <p className={styles.footer_description}>
              Experience the epitome of hospitality and timeless elegance with
              Heaven Seven Hotels. Uniting luxury with comfort in spectacular
              locations, we ensure each visit is uniquely memorable.
            </p>

            <h1 className={styles.footer_title}>Apps</h1>
            <div className={styles.footer_apps}>
              <div className={styles.footer_app}>
                <img
                  src={apple}
                  alt="Heaven Seven"
                  className={styles.footer_app_logo}
                />
                <div>
                  <h3 className={styles.footer_app_title}>Download on the</h3>
                  <p className={styles.footer_app_description}>Apple Store</p>
                </div>
              </div>
              <div className={styles.footer_app}>
                <img
                  src={android}
                  alt="Heaven Seven"
                  className={styles.footer_app_logo}
                />
                <div>
                  <h3 className={styles.footer_app_title}>Get in on</h3>
                  <p className={styles.footer_app_description}>Google Play</p>
                </div>
              </div>
            </div>

            <h1 className={styles.footer_title}>Follow us on social media</h1>
            <div className={styles.footer_socials}>
              <img
                src={facebook}
                alt="facebook"
                className={styles.footer_social}
              />
              <img
                src={intagram}
                alt="intagram"
                className={styles.footer_social}
              />
              <img
                src={linkdin}
                alt="linkdin"
                className={styles.footer_social}
              />
              <img src={tweet} alt="tweet" className={styles.footer_social} />
            </div>
          </div>

          <div className={styles.footer_navigation}>
            <div className="grid col-3">
              <div className={styles.footer_nav_popular}>
                <h1 className={styles.footer_title}>Popular Search</h1>
                <ul className={styles.footer_nav}>
                  <li>Apartment for Sale</li>
                  <li>Apartment for Rent</li>
                  <li>Offices for Sale</li>
                  <li>Offices for Rent</li>
                </ul>
              </div>
              <div className={styles.footer_nav_quick}>
                <h1 className={styles.footer_title}>Quick Links</h1>
                <ul className={styles.footer_nav}>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Pricing Plans</li>
                  <li>Our Services</li>
                  <li><Link to={'/contact'}>Contact</Link></li>
                  <li>Careers</li>
                  <li><Link to={'/faq'}>FAQs</Link></li>
                </ul>
              </div>
              <div className={styles.footer_nav_popular}>
                <h1 className={styles.footer_title}>Discovery</h1>
                <ul className={styles.footer_nav}>
                  <li>Chicago</li>
                  <li>Los Angeles</li>
                  <li>New Jersey</li>
                  <li>New York</li>
                  <li>California</li>
                </ul>
              </div>
            </div>
            <div className="grid col-2">
              <div className={styles.footer_contact}>
                <h2 className={styles.footer_contact_title}>
                  Total Free Customer Care
                </h2>
                <p className={styles.footer_contact_number}>+(088) 123 456 789</p>
              </div>

              <div className={styles.footer_contact}>
                <h2 className={styles.footer_contact_title}>
                Live Support?
                </h2>
                <p className={styles.footer_contact_number}>hi@homez.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright_section}>
        <div className={`${styles.copyright} container`}>
          <p>© Haven seven - All rights reserved</p>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
          <div className={styles.copyright_language}></div>
        </div>
      </div>
    </div>
  );
};

export default FooterHotel;
