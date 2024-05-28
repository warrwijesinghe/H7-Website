import React from "react";
import styles from "./Gallery.module.css";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import EventCard from "../../components/specific/EventCard/EventCard";
import Partners from "../../components/specific/Partners/Partners";
import logo from "../../assets/images/logo-ne.png";

import facebookIco from "../../assets/icons/facebook-ico.svg";
import linkedinIco from "../../assets/icons/linkedin-ico.svg";
import instragramIco from "../../assets/icons/instragram-ico.svg";
import youtubeIco from "../../assets/icons/youtube-ico.svg";
import tweetIco from "../../assets/icons/tweet-ico.svg";
import playIco from "../../assets/icons/video-ico.svg";
import Card from "../../components/specific/Card/Card";
import CheckRateCard from "../../components/specific/CheckRateCard/CheckRateCard";

const Gallery = () => {
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

export default Gallery;
