import React from 'react';
import styles from './HotelGallery.module.css';
import HeroSection from '../../../components/common/HeroSection/HeroSection';
import StayUs from '../../../components/common/StayUs/StayUs';
import Card from '../../../components/specific/Card/Card';
import playIco from "../../../assets/icons/video-ico.svg";
import logo from "../../../assets/images/logo-ne.png";
import Partners from '../../../components/specific/Partners/Partners';

const HotelGallery = () => {
  return (
    <div>
      <HeroSection />

      <section className={styles.gallery_welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">The Heaven Seven Hotels Gallery</h1>
          <p className="description mb-sm">
            Welcome to our Gallery, where you can explore a visual feast of what
            awaits you at Heaven Seven Hotels. This curated collection showcases
            the best of our accommodations, amenities, and the stunning
            surroundings of each of our properties. From the elegance of our
            interiors to the breathtaking beauty of the landscapes that frame
            our hotels, every image invites you to step into a world of refined
            luxury and serene beauty. Dive into this visual journey and imagine
            yourself relaxing in our luxurious settings, indulging in local
            culture, and making unforgettable memories. Whether you're a future
            guest planning your stay or simply dreaming of your next getaway,
            our gallery will inspire your travels and offer a glimpse into the
            experiences that Heaven Seven Hotels provide..
          </p>
        </div>
      </section>

      <section className={styles.gallery_grid_section}>
        <div className="container text-center">
          <div className={styles.gallery_grid}>
            <div className={styles.gallery_grid_Item_1}>
              <h3 className={styles.gallery_grid_title}>Images Gallery</h3>
              <div className={styles.gallery_grid_Item_img}>
                <img src="https://picsum.photos/400" alt="gallery 1" className={styles.gallery_grid_img} />
              </div>
            </div>
              <div className={styles.gallery_grid_Item_2}>
                <img src="https://picsum.photos/400" alt="gallery 2" className={styles.gallery_grid_img} />
              </div>
              <div className={styles.gallery_grid_Item_3}>
                <img src="https://picsum.photos/400" alt="gallery 3" className={styles.gallery_grid_img} />
              </div>
          </div>
          <div className="read_more">
            <p>Load More</p>
          </div>
        </div>
      </section>

      <section className={styles.gallery_grid_section}>
        <div className="container text-center">
          <div className={styles.gallery_grid}>
            <div className={styles.gallery_grid_Item_1}>
              <h3 className={styles.gallery_grid_title}>Video Gallery</h3>
              <div className={styles.gallery_grid_Item_img}>
                <img src="https://picsum.photos/400" alt="gallery video 1" className={styles.gallery_grid_img} />
                <img src={playIco} alt="play icon" className={styles.gallery_grid_play} />
              </div>
            </div>
              <div className={styles.gallery_grid_Item_2}>
                <img src="https://picsum.photos/400" alt="gallery video 2" className={styles.gallery_grid_img} />
                <img src={playIco} alt="play icon" className={styles.gallery_grid_play} />
              </div>
              <div className={styles.gallery_grid_Item_3}>
                <img src="https://picsum.photos/400" alt="gallery video 3" className={styles.gallery_grid_img} />
                <img src={playIco} alt="play icon" className={styles.gallery_grid_play} />
              </div>
          </div>
          <div className="read_more">
            <p>Load More</p>
          </div>
        </div>
      </section>

      <section className={`text-center ${styles.hotels_section}`}>
        <div className={styles.hotel_list}>
          <div className="container ">
            <span className="subheading">Welcome To Haven Seven Hotels</span>
            <h1 className="heading-primary mb-lg">
              Life is short, travel often
            </h1>

            <div className={`grid col-3 ${styles.mobile_grid}`}>
              <Card
                logo={logo}
                cardImage="https://picsum.photos/400"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <Card
                logo={logo}
                cardImage="https://picsum.photos/400"
                title="Nuwar Eliya"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <Card
                logo={logo}
                cardImage="https://picsum.photos/400"
                title="Hikkaduwa"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <StayUs />
    </div>
  )
}

export default HotelGallery;
