import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../../assets/images/logo-ne.png";
import apple from "../../../assets/icons/Symbol.svg";
import android from "../../../assets/icons/play-store-ico.svg";
import facebook from "../../../assets/icons/fill-facebook-ico.svg";
import intagram from "../../../assets/icons/fill-intagram-ico.svg";
import linkdin from "../../../assets/icons/fill-linkdin-ico.svg";
import tweet from "../../../assets/icons/fill-tweet-ico.svg";
import { Link } from "react-router-dom";
import { fetchProperty } from "../../../api/apiClient";

const Footer = () => {
  const [property, setProperty] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [property] = await Promise.all([fetchProperty("Group")]);

        setProperty(property);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }


  return (
    <div>
      <footer className={styles.footer_section}>
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.footer_about}>
              <img
                src={logo}
                alt="Heaven Seven"
                className={styles.footer_logo}
              />
              <p className={styles.footer_description}>
                {property?.shortDescription || ""}
              </p>
            </div>
            <div className={styles.footer_nav_list}>
              <div className={styles.footer_navigation}>
                <div className={`grid col-3 ${styles.mobile_grid_col_3}`}>
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
                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                      <li>Careers</li>
                      <li>
                        <Link to={"/faq"}>FAQs</Link>
                      </li>
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
                  <div className={styles.mobile_app}>
                    <h1 className={styles.footer_title}>Apps</h1>
                    <div className={styles.footer_apps}>
                      <div className={styles.footer_app}>
                        <img
                          src={apple}
                          alt="Heaven Seven"
                          className={styles.footer_app_logo}
                        />
                        <div>
                          <h3 className={styles.footer_app_title}>
                            Download on the
                          </h3>
                          <p className={styles.footer_app_description}>
                            Apple Store
                          </p>
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
                          <p className={styles.footer_app_description}>
                            Google Play
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer_apps_col}>
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
            </div>
            <div className={styles.footer_social_col}>
              <h1 className={styles.footer_title}>Follow us on social media</h1>
              <div className={styles.footer_socials}>
                {property?.fb && (
                  <a href={property?.fb || ""}>
                    <img
                      src={facebook}
                      alt="facebook"
                      className={styles.footer_social}
                    />
                  </a>
                )}
                {property?.instagram && (
                  <a href={property?.instagram || ""}>
                    <img
                      src={intagram}
                      alt="intagram"
                      className={styles.footer_social}
                    />
                  </a>
                )}
                {property?.linkedin && (
                  <a href={property?.linkedin || ""}>
                    <img
                      src={linkdin}
                      alt="linkdin"
                      className={styles.footer_social}
                    />
                  </a>
                )}
                {property?.tx && (
                  <a href={property?.tx || ""}>
                    <img
                      src={tweet}
                      alt="tweet"
                      className={styles.footer_social}
                    />
                  </a>
                )}
              </div>
            </div>
            <div className={styles.footer_contact_col}>
              <div className={`grid col-2 ${styles.mobile_grid_col_2}`}>
                <div className={styles.footer_contact}>
                  <h2 className={styles.footer_contact_title}>
                    Total Free Customer Care
                  </h2>
                  <a
                    href={`tel:${property?.hotline || ""}`}
                    className={styles.footer_contact_number}
                  >
                    {property?.hotline}
                  </a>
                </div>

                <div className={styles.footer_contact}>
                  <h2 className={styles.footer_contact_title}>Live Support?</h2>
                  <a
                    href={`mailto:${property?.email || ""}`}
                    className={styles.footer_contact_number}
                  >
                    {property?.email}
                  </a>
                </div>
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
          <div className={styles.copyright_language}>
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
