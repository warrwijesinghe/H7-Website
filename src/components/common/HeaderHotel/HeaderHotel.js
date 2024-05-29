import React from "react";
import Button from "../Button/Button";
import styles from './HeaderHotel.module.css';
// import searchIco from '../../../assets/icons/search-ico.svg';
import { Link, useParams } from "react-router-dom";
import menuIco from '../../../assets/icons/menu-ico.svg';

const HeaderHotel = () => {
  let { id } = useParams();

  return (
    <header className={styles.header}>
    <div className={styles.container}>
      <div className="left-nav">
        <Button type="button" variant="primary" fullWidth={false}>
        <img src={menuIco} alt="menu" className={styles.header_menu} />
        </Button>
        {/* <Button type="button" variant="primary-outline" fullWidth={false}>
          <img src={searchIco} alt="search" className={styles.header_search} />
        </Button> */}
      </div>
      <nav className="navbar">
        <ul className={styles.nav_links}>
          <li>
            <Link  className={styles.nav_link} to={`/hotel/${id}`}>Home</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to="/experience">Experiences</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={styles.nav_link} to="/about">About</Link>
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
