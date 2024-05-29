import React from "react";
import styles from "./Menu.module.css";
import closeIco from "../../../assets/icons/close-ico.svg";
import { useMenu } from "../../../contexts/MenuContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const { menuOpen, toggleMenu } = useMenu();

  // if (!menuOpen) return null;

  return (
    <div className={`${menuOpen ? styles.overlay: ''}`} onClick={toggleMenu}>
      <div className={`${styles.menu} ${menuOpen ? styles.menu_open : ''}`}>
        <ul className={styles.menu_list} onClick={(e) => e.stopPropagation()}>
          <li onClick={toggleMenu}><Link to={'/'} >Home</Link></li>
          <li onClick={toggleMenu}><Link to={'./hotels'} >Hotels</Link></li>
          <li onClick={toggleMenu}><Link to={'/'} >Rooms & Suites</Link></li>
          <li onClick={toggleMenu}><Link to={'/'} >Wine & Dine</Link></li>
          <li onClick={toggleMenu}><Link to={'/'} >Recreation & Comforts</Link></li>
          <li onClick={toggleMenu}><Link to={'./experience'} >Experiences</Link></li>
          <li onClick={toggleMenu}><Link to={'./gallery'} >Gallery</Link></li>
          <li onClick={toggleMenu}><Link to={'./faq'} >Testimonials</Link></li>
          <li onClick={toggleMenu}><Link to={'./about'} >About</Link></li>
          <li onClick={toggleMenu}><Link to={'./contact'} >Contact Us</Link></li>
        </ul>

        <img
          src={closeIco}
          alt="close"
          className={styles.close_ico}
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Menu;