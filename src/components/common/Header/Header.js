import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
// import searchIco from '../../../assets/icons/search-ico.svg';
import menuIco from "../../../assets/icons/menu-ico.svg";
import { Link } from "react-router-dom";
import { useMenu } from "../../../contexts/MenuContext";

const Header = () => {
  const { toggleMenu } = useMenu();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : styles.absolute}`}>
      <div className={styles.container}>
        <div className="left-nav">
          <Button type="button" variant="primary" fullWidth={false} onClick={toggleMenu}>
            <img src={menuIco} alt="menu" className={styles.header_menu} />
          </Button>
          {/* <Button type="button" variant="primary-outline" fullWidth={false}>
          <img src={searchIco} alt="search" className={styles.header_search} />
        </Button> */}
        </div>
        <nav className="navbar">
          <ul className={styles.nav_links}>
            <li>
              <Link className={styles.nav_link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="/hotels">
                Hotels
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="/experience">
                Experiences
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="right-nav">
          <Button type="button" variant="primary">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
