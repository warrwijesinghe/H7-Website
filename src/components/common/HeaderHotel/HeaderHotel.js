import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from './HeaderHotel.module.css';
// import searchIco from '../../../assets/icons/search-ico.svg';
import { Link, useParams } from "react-router-dom";
import menuIco from '../../../assets/icons/menu-ico.svg';
import { useMenu } from "../../../contexts/MenuContext";

const HeaderHotel = () => {
  const { toggleMenu } = useMenu();
  let { hotel } = useParams();
  
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
            <Link  className={styles.nav_link} to={`/hotel/${hotel}`}>Home</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to={`/accommodation/${hotel}`}>Accommodation</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to={`/offers/${hotel}`}>Special Offers</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to={`/gallery/${hotel}`}>Gallery</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to={`/contact/${hotel}`}>Contact Us</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to={`/experience/${hotel}`}>Experiences</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to="/">Heaven Seven</Link>
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

export default HeaderHotel;
