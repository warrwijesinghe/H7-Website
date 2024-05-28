import React from "react";
import styles from "./Home.module.css";
import logo from "../../assets/images/logo-ne.png";
import map from "../../assets/images/Map.png";
import playIco from "../../assets/icons/video-ico.svg";
import CheckRateCard from "../../components/specific/CheckRateCard/CheckRateCard";
import Card from "../../components/specific/Card/Card";
import Button from "../../components/common/Button/Button";
import SliderLeft from "../../components/specific/SliderLeft/SliderLeft";
import OfferCard from "../../components/specific/OfferCard/OfferCard";
import EventCard from "../../components/specific/EventCard/EventCard";
import Partners from "../../components/specific/Partners/Partners";

import facebookIco from "../../assets/icons/facebook-ico.svg";
import linkedinIco from "../../assets/icons/linkedin-ico.svg";
import instragramIco from "../../assets/icons/instragram-ico.svg";
import youtubeIco from "../../assets/icons/youtube-ico.svg";
import arrowHeadRightIco from "../../assets/icons/arrow-head-right-ico.svg";
import arrowHeadLeftIco from "../../assets/icons/arrow-head-left-ico.svg";

import tweetIco from "../../assets/icons/tweet-ico.svg";
import Input from "../../components/common/Input/Input";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section className={styles.hero_section}>
        <div className={styles.logo}>
          <div>
            <img src={logo} alt="Haven Seven Hotels" />
            <p>Heaven Seven Hotel</p>
          </div>
        </div>
        <CheckRateCard />
      </section>
      <div className="container">
        <section className={`text-center ${styles.welcome_section}`}>
          <span className="subheading">Welcome To Haven Seven Hotels</span>
          <h1 className="heading-primary">Life is short, travel often</h1>
          <p className="description">
            Welcome to Heaven Seven Hotels, where each stay promises a blend of
            comfort, culture, and exceptional service. As you explore the map
            below, you'll discover our carefully selected properties, each
            nestled in some of the most stunning and strategic locations to
            serve your travel needs. Whether you are planning a leisurely
            retreat or a business trip, our hotels offer a sanctuary where
            luxury meets tradition. Explore our map to find your perfect
            destination and begin the journey to an unforgettable experience
            with Heaven Seven Hotels.
          </p>

          <img
            src={map}
            alt="Tourism map sri lanka"
            className={styles.welcome_img}
          />

          <p className="description">
            Each location is a gateway to local delights, offering unique
            opportunities to explore and immerse yourself in the region's
            atmosphere. With Heaven Seven, your journey goes beyond the
            ordinary, providing a perfect blend of relaxation and adventure. Let
            us guide you to your next exceptional escape, where your comfort is
            our priority and your satisfaction is guaranteed.
          </p>
          <div className="read_more">
            <p>Read More</p>
          </div>
        </section>

        <section className={styles.about_section}>
          <div className={styles.about_content}>
            <span className="subheading">About</span>
            <h2 className={styles.about_heading}>Haven Seven Hotels</h2>
            <p className={styles.about_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor
            </p>
            <ul className={styles.about_list}>
              <li>Explore Sri lanka</li>
              <li>Unlimited Destination</li>
              <li>24/7 supports</li>
            </ul>
          </div>
          <div className={styles.about_image}>
            <img src={playIco} alt="play" />
          </div>
        </section>
      </div>

      <section className={`text-center ${styles.hotels_section}`}>
        <div className={styles.hotel_list}>
          <div className="container ">
            <span className="subheading">Welcome To Haven Seven Hotels</span>
            <h1 className="heading-primary mb-lg">
              Life is short, travel often
            </h1>

            <div className="grid col-3">
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
      <section className={styles.experience_section}>
        <div className="container">
          <div className={styles.experience}>
            <div className="experience_content">
              <h2 className={styles.experience_heading}>Our Experiences</h2>
              <p className={styles.experience_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiualiquip ex ea commodo
              </p>
              <Button type="button" variant="primary">
                Explore More
              </Button>
            </div>
            <div className="experience_slider">
              <SliderLeft />
            </div>
          </div>
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
            <Link to={'/special-offers'}>View More</Link>
          </div>
        </div>
      </section>
      <section className={styles.mice_section}>
        <div className="container text-center">
          <span className="subheading">Welcome To Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">MICE Tours</h1>

          <EventCard logo="https://picsum.photos/800" isLeft={true}>
            <h1 className={styles.mice_card_title}>
              Your Business Is Our Pleasure ( meeting )
            </h1>
            <p className={styles.mice_card_description}>
              MICE (Meetings, Incentives, Conferences, and Exhibitions): Elevate
              your corporate events with our dedicated MICE services, offering
              state-of-the-art facilities and tailored support to ensure your
              meetings, incentives, conferences, and exhibitions are executed
              flawlessly at Heaven Seven Hotels.
            </p>
            <Button type="button" variant="primary">
              Explore More
            </Button>

            <button type="button" className={styles.slide_next_btn}>
            <img src={arrowHeadRightIco} alt="next" />
          </button>
          <button type="button" className={styles.slide_prev_btn}>
            <img src={arrowHeadLeftIco} alt="next" />
          </button>
          </EventCard>
          
        </div>
      </section>
      <section className={styles.home_gallery_section}>
        <div className="text-center">
          <span className="subheading">Welcome To Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">Explore Our Gallery</h1>
          <div className={styles.home_gallery_grid}>
            <div className={styles.home_gallery_grid_item_1}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 1"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_2}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 2"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_3}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 3"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_4}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 4"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_5}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 5"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_6}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 6"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_7}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 7"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_8}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 8"
                className={styles.home_gallery_img}
              />
            </div>
            <div className={styles.home_gallery_grid_item_9}>
              <img
                src="https://picsum.photos/800"
                alt="gallery 8"
                className={styles.home_gallery_img}
              />
            </div>
          </div>
          <div className="read_more">
            <Link to={'/gallery'}>View More</Link>
          </div>
        </div>
      </section>
      <Partners />
      <section className={styles.stay_section}>
        <div className="container">
          <EventCard logo="https://picsum.photos/800" isLeft={false}>
            <h1 className={styles.stay_card_title}>Stay with Us</h1>
            <p className={styles.stay_card_description}>
              Stay connected and informed by following us on social media and
              signing up for our newsletter to receive the latest news, offers,
              and insights directly from Heaven Seven Hotels.
            </p>

            <div className={styles.stay_form_grid}>
              <Input type="text" placeholder="RECEIVE NEWSLETTERS AND OFFERS" />
              <Button type="button" variant="primary">
                Submit
              </Button>
            </div>

            <div className={styles.stay_social}>
              <div className={styles.stay_social_ico}>
                <img src={facebookIco} alt="facebook" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={linkedinIco} alt="linkin" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={instragramIco} alt="instagram" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={youtubeIco} alt="youtube" />
              </div>
              <div className={styles.stay_social_ico}>
                <img src={tweetIco} alt="tweet" />
              </div>
            </div>
          </EventCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
