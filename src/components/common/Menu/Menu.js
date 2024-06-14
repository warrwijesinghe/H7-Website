import React from "react";
import styles from "./Menu.module.css";
import closeIco from "../../../assets/icons/close-ico.svg";
import logo from "../../../assets/images/logo-ne.png";
import { useMenu } from "../../../contexts/MenuContext";
import { Link, useParams } from "react-router-dom";

const Menu = ({ layout = "index" }) => {
  let { hotel } = useParams();
  const { menuOpen, toggleMenu } = useMenu();
  const overlayClass = `${styles.overlay} ${
    menuOpen ? styles.overlay_open : ""
  }`;
  // if (!menuOpen) return null;

  const handleToggleMenu = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <div
      className={`${menuOpen ? overlayClass : ""}`}
      onClick={handleToggleMenu}
    >
      <div
        className={`${styles.menu} ${menuOpen ? styles.menu_open : ""}`}
        onClick={toggleMenu}
      >
        {layout === "index" && (
          <ul className={styles.menu_list} onClick={(e) => e.stopPropagation()}>
            <li onClick={toggleMenu}>
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./hotels"}>Hotels</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./experience"}>Experiences</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./special-offers"}>Special Offer</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./gallery"}>Gallery</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./faq"}>Testimonials</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./about"}>About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"./contact"}>Contact Us</Link>
            </li>
          </ul>
        )}

        {layout === "hotel" && (
          <ul className={styles.menu_list} onClick={(e) => e.stopPropagation()}>
            <li onClick={toggleMenu}>
              <Link to={`/`}>Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={`/accommodation/${hotel}`}>Rooms & Suites</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={`/dining/${hotel}`}>Wine & Dine</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={`/experience/${hotel}`}>Experiences</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={`/offers/${hotel}`}>Offer</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={`/gallery/${hotel}`}>Gallery</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"/faq"}>Testimonials</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={"/about"}>About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to={`/contact/${hotel}`}>Contact Us</Link>
            </li>
          </ul>
        )}

        <div className={styles.close_btn}>
          <img
            src={closeIco}
            alt="close"
            className={styles.close_ico}
            onClick={toggleMenu}
          />
        </div>

        
          <img
            src={logo}
            alt="logo"
            className={styles.menu_logo}
            onClick={toggleMenu}
          />
      </div>
    </div>
  );
};

export default Menu;
