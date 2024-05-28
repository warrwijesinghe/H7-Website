import React from "react";
import styles from "./HotelHome.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import OfferCard from "../../../components/specific/OfferCard/OfferCard";
import EventCard from "../../../components/specific/EventCard/EventCard";
import Button from "../../../components/common/Button/Button";
import Partners from "../../../components/specific/Partners/Partners";
import StayUs from "../../../components/common/StayUs/StayUs";
import { Link } from "react-router-dom";
import arrowHeadRightIco from "../../../assets/icons/arrow-head-right-ico.svg";
import arrowHeadLeftIco from "../../../assets/icons/arrow-head-left-ico.svg";

const HotelHome = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary mb-lg">
            Welcome to Heaven Seven Nuwara Eiya
          </h1>
          <div className={styles.welcome_grid}>
            <div className={styles.welcome_content}>
              <p className={styles.welcome_description}>
                Heaven Seven, nestled in the picturesque hills of Nuwara Eliya,
                offers a tranquil escape amidst lush greenery and breathtaking
                mountain vistas. Conveniently located in the heart of this
                charming town, Heaven Seven welcomes guests with warm
                hospitality and modern amenities. The hotel features comfortable
                rooms adorned with elegant furnishings, ensuring a restful stay
                for weary travelers. Guests can indulge in delicious cuisine at
                the on-site restaurant, showcasing a delectable array of local
                and international dishes. Whether you're seeking adventure or
                relaxation, Heaven Seven serves as the perfect base for
                exploring Nuwara Eliya's natural wonders, including cascading
                waterfalls, tea plantations, and serene lakes. Immerse yourself
                in the beauty of Sri Lanka's hill country and create
                unforgettable memories at Heaven Seven.
              </p>
            </div>
            <div className={styles.welcome_image}>
              <img src="https://picsum.photos/400" alt="welcome logo" />
            </div>
          </div>
          <h1 className="heading-secondary mb-lg">
            Where Tranquility Meets Luxury in Sri Lanka's Highlands
          </h1>
          <div className="description">
            Heaven Seven Nuwara Eliya welcomes you to a serene haven nestled
            amidst the misty hills of Sri Lanka's scenic highlands. Our hotel
            accommodations embody the essence of comfort and luxury, offering a
            perfect retreat for travelers seeking tranquility and relaxation.
            Each room at Heaven Seven is meticulously crafted to provide a cozy
            sanctuary, featuring contemporary decor and modern amenities.
            Whether you choose one of our stylish standard rooms or opt for the
            spacious elegance of our suites, you'll find yourself enveloped in
            comfort and convenience. Experience the epitome of hospitality
            amidst the beauty of Nuwara Eliya at Heaven Seven. Whether you're
            exploring the region's scenic wonders or simply seeking a peaceful
            retreat, our hotel accommodations provide the perfect setting for
            your unforgettable getaway
          </div>

          <div className={styles.welcome_gallery}>
            <div className={styles.left_gallery}>
              <img
                src="https://picsum.photos/800"
                alt="gallery"
                className={styles.gallery_img}
              />
              <img
                src="https://picsum.photos/800"
                alt="gallery"
                className={styles.gallery_img}
              />
            </div>
            <div className={styles.right_gallery}>
              <img
                src="https://picsum.photos/800"
                alt="gallery"
                className={styles.gallery_img}
              />
              <img
                src="https://picsum.photos/800"
                alt="gallery"
                className={styles.gallery_img}
              />
            </div>
          </div>
          <div className="grid read_more">
            <Link to={"/special-offers"}>View More</Link>
          </div>
        </div>
      </section>
      <section className={styles.dining_section}>
        <div className="container text-center">
          <div className="grid col-2">
            <div className={styles.dining_banner}>
              <img src="https://picsum.photos/400" alt="Dining logo" />
            </div>
            <div className={styles.dining_content}>
              <h1 className="heading-secondary mb-lg">Dining</h1>
              <p className={styles.welcome_description}>
                Indulge in a culinary journey at Heaven Seven's restaurant. From
                vibrant Sri Lankan flavors to international delights, our menu
                offers something for every palate. Start your day with a hearty
                breakfast, enjoy light bites for lunch, and savor gourmet
                dinners under the stars. With locally sourced ingredients and
                expertly crafted dishes, dining at Heaven Seven is a memorable
                experience not to be missed
              </p>

              <div className="grid read_more">
                <Link to={"/special-offers"}>Explore More</Link>
              </div>
            </div>
          </div>
          <div className={styles.dining_gallery}>
            <div className={styles.dining_gallery_image}>
              <img src="https://picsum.photos/400" alt="Dining logo" />
            </div>
            <div className={styles.dining_gallery_image}>
              <img src="https://picsum.photos/400" alt="Dining logo" />
            </div>
            <div className={styles.dining_gallery_image}>
              <img src="https://picsum.photos/400" alt="Dining logo" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.experience_section}>
        <div className="container text-center">
          <h1 className="heading-secondary mb-lg">
            Unforgettable Experiences Await
          </h1>
          <div className="description">
            Indulge in a culinary journey at Heaven Seven's restaurant. From
            vibrant Sri Lankan flavors to international delights, our menu
            offers something for every palate. Start your day with a hearty
            breakfast, enjoy light bites for lunch, and savor gourmet dinners
            under the stars. With locally sourced ingredients and expertly
            crafted dishes, dining at Heaven Seven is a memorable experience not
            to be missed
          </div>

          <div className={styles.experience_grid}>
            <img src="https://picsum.photos/400" alt="Dining logo" />
            <p className={styles.welcome_description}>
              Indulge in a culinary journey at Heaven Seven's restaurant. From
              vibrant Sri Lankan flavors to international delights, our menu
              offers something for every palate. Start your day with a hearty
              breakfast, enjoy light bites for lunch, and savor gourmet dinners
              under the stars. With locally sourced ingredients and expertly
              crafted dishes, dining at Heaven Seven is a memorable experience
              not to be missed
            </p>
          </div>
          <div className={styles.experience_grid}>
            <p className={styles.welcome_description}>
              "The park offers amazing hikes amongst the shadows of Sri Lanka's
              second and third-highest mountainsKirigalpotta and Totapola.
              Horton Plains National Park is the only park in Sri Lanka where
              visitors can get out of the vehicle and take a walk in the
              wilderness. The World's End and Baker's fall are the highlights of
              the Horton Plains. The tourists approaching Horton Plains from
              Nuwara Eliya find an entrance point at Pattipola while those
              approaching from Haputale find an entrance point at Ohiya. Three
              kilometers drive from either entrance leads to the newly built
              visitor's center, the starting point for the 9 km main trek of the
              Horton Plains. The main trek taking a circular route can be
              enjoyed within 3 hours. The trail opens up with an expansive view
              of grassland and densely wooded cloud forest. There is also a
              small museum at the Visitors center that exhibits interesting
              display
            </p>
            <img src="https://picsum.photos/400" alt="Dining logo" />
          </div>

          <div className={styles.experience_slider}>
            <img src="https://picsum.photos/400" alt="Dining logo" />
            <button type="button" className={styles.slide_next_btn}>
              <img src={arrowHeadRightIco} alt="next" />
            </button>
            <button type="button" className={styles.slide_prev_btn}>
              <img src={arrowHeadLeftIco} alt="next" />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.book_info_section}>
        <div className="container text-center">
          <EventCard logo="https://picsum.photos/800" isLeft={true}>
            <h1 className={styles.book_info_title}>Book Your Stay</h1>
            <p className={styles.book_info_description}>
              Choosing Heaven Seven Hotels means choosing a memorable
              experience. Browse each of our hotel pages to learn more about
              what makes each property unique and discover the perfect backdrop
              for your next getaway
            </p>
            <Button type="button" variant="primary">
              Book Now
            </Button>
          </EventCard>
        </div>
      </section>

      <section className={`text-center ${styles.offer_section}`}>
        <div className="container">
          <span className="subheading">Heaven Seven Hotel</span>
          <h1 className="heading-primary mb-lg">Special Offers</h1>

          <div className="grid col-3">
            <OfferCard
              cardImage="https://picsum.photos/400"
              title="A Limited Time Hikkaduwa"
              desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
            />
            <OfferCard
              cardImage="https://picsum.photos/400"
              title="A Limited Time Hikkaduwa"
              desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
            />
            <OfferCard
              cardImage="https://picsum.photos/400"
              title="A Limited Time Hikkaduwa"
              desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
            />
          </div>

          <div className="read_more">
            <Link to={"/offers/heaven-seven"}>View More</Link>
          </div>
        </div>
      </section>

      <Partners />
      <StayUs />
    </div>
  );
};

export default HotelHome;
