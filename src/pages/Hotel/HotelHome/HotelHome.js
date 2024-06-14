import React, { useEffect, useState } from "react";
import styles from "./HotelHome.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import OfferCard from "../../../components/specific/OfferCard/OfferCard";
import EventCard from "../../../components/specific/EventCard/EventCard";
import Button from "../../../components/common/Button/Button";
import Partners from "../../../components/specific/Partners/Partners";
import StayUs from "../../../components/common/StayUs/StayUs";
import { Link, useParams } from "react-router-dom";
import Carousel from "../../../components/specific/Carousel/Carousel";
import Card from "../../../components/specific/Card/Card";
import logo from "../../../assets/images/logo-ne.png";
import { fetchProperties, fetchPropertyImage, fetchPropertyText, fetchWebBanners } from "../../../api/apiClient";
import defaultImg from "../../../assets/images/default.jpg";

const HotelHome = () => {
  let { hotel } = useParams();

  const [propertyText, setPropertyText] = useState(null);
  const [propertyImages, setPropertyImages] = useState(null);
  const [properties, setProperties] = useState(null);
  const [banners, setBanners] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData, imageData, propertiesData, webBanner] = await Promise.all([
          fetchPropertyText(hotel, "Home"),
          fetchPropertyImage(hotel, "Gallery", "Gallery", 10),
          fetchProperties(),
          fetchWebBanners(hotel, "Home"),
        ]);

        setPropertyText(textData);
        setPropertyImages(imageData);
        setProperties(propertiesData.filter((item) => item.id !== 14));
        setBanners(webBanner);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hotel]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  const filterHotel = properties.find(property => property.shortName === hotel);
  console.log("text", propertyText);
  console.log("images", propertyImages);
  console.log("properties", properties);
  console.log("banner", banners);

  return (
    <div>
      <HeroSection />
      <section className={styles.welcome_section}>
        <div className="container">
          <div className={styles.welcome_grid}>
            <div className={styles.welcome_content}>
              <span className="subheading">{propertyText?.welcome_Subheader?.text || ''}</span>
              <h1 className={styles.welcome_title}>
                Heaven Seven <br /> {propertyText?.welcome_Header?.text || ''}
              </h1>
              <p className={styles.welcome_description}>
              {propertyText?.welcome_paragraph_1?.text || ''}
              </p>
              <div className={styles.welcome_logo}>

              <img
                src={logo}
                alt="heaven seven logo"
                
              />
              </div>
            </div>
            <div className={styles.welcome_image}>
              <img
                src={filterHotel?.property_image_urls[0]?.imgeUrl || defaultImg}
                alt={filterHotel?.property_image_urls[0]?.imgAlt || 'banner image'}
                className={styles.welcome_banner}
              />
            </div>
          </div>
          {/* <h1 className="heading-secondary mb-lg">
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
          </div> */}

          <div className={styles.welcome_gallery}>
            <div className={styles.left_gallery}>
              <img
                src={banners[0]?.banner_image_urls[0]?.imgeUrl}
                alt={banners[0]?.banner_image_urls[0]?.imgAlt}
                className={styles.gallery_img}
              />
              <img
                src={banners[1]?.banner_image_urls[0]?.imgeUrl}
                alt={banners[1]?.banner_image_urls[0]?.imgAlt}
                className={styles.gallery_img}
              />
            </div>
            <div className={styles.right_gallery}>
              <img
                src={banners[2]?.banner_image_urls[0]?.imgeUrl}
                alt={banners[2]?.banner_image_urls[0]?.imgAlt}
                className={styles.gallery_img}
              />
              <img
                src={banners[3]?.banner_image_urls[0]?.imgeUrl}
                alt={banners[3]?.banner_image_urls[0]?.imgAlt}
                className={styles.gallery_img}
              />
            </div>
          </div>
          <div className="grid read_more">
            <Link to={"/special-offers"}>View Gallery</Link>
          </div>
        </div>
      </section>
      <section className={styles.dining_section}>
        <div className="container text-center">
          <div className={`grid col-2 ${styles.mobile_dining}`}>
            <div className={styles.dining_banner}>
              <img
                src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                alt="Dining logo"
              />
            </div>
            <div className={styles.dining_content}>
              <h1 className="heading-secondary mb-lg">{propertyText?.secondary_header?.text || ''}</h1>
              <p className={styles.welcome_description}>
              {propertyText?.secondary_paragraph_1?.text || ''}
              </p>

              <div className="grid read_more">
                <Link to={"/special-offers"}>Explore More</Link>
              </div>
            </div>
          </div>
          <div className={styles.dining_gallery}>
            <div className={styles.dining_gallery_image}>
              <img
                src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                alt="Dining logo"
              />
            </div>
            <div className={styles.dining_gallery_image}>
              <img
                src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                alt="Dining logo"
              />
            </div>
            <div className={styles.dining_gallery_image}>
              <img
                src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                alt="Dining logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.experience_section}>
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
            <img
              src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              alt="Dining logo"
            />
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
            <img
              src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              alt="Dining logo"
              className={styles.experience_img}
            />
          </div>

          <div className={styles.experience_slider}>
            <img
              src="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
              alt="Dining logo"
            />
            <button type="button" className={styles.slide_next_btn}>
              <img src={arrowHeadRightIco} alt="next" />
            </button>
            <button type="button" className={styles.slide_prev_btn}>
              <img src={arrowHeadLeftIco} alt="next" />
            </button>
          </div>
        </div>
      </section> */}

      <section className={styles.experience_explore}>
        <div className="container text-center">
          <span className="subheading">Lorem ipsum dolor sit amet.</span>
          <h1 className="heading-primary mb-lg">Explore Nuwara Eliya</h1>
          <div className="desktop">
            <div className="grid col-3">
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
            </div>
          </div>
          <div className="mobile">
            <Carousel>
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
            </Carousel>
          </div>
        </div>
      </section>

      <section className={styles.experience_section}>
        <div className="container text-center">
          <span className="subheading">Lorem ipsum dolor sit amet.</span>
          <h1 className="heading-primary mb-lg">Heaven Seven Experience</h1>
          <div className="desktop">
            <div className="grid col-3">
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
            </div>
          </div>
          <div className="mobile">
            <Carousel>
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
              <Card
                logo={logo}
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="Kandy"
                subtitle="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
                tag={true}
                button={true}
                isFullWidth={true}
              />
            </Carousel>
          </div>
        </div>
      </section>

      <section className={styles.book_info_section}>
        <div className="container text-center">
          <EventCard
            logo="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
            isLeft={true}
          >
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
          <div className="desktop">
            <div className={`grid col-3  ${styles.mobile_grid}`}>
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
            </div>
          </div>

          <div className="mobile">
            <Carousel>
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
              <OfferCard
                cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                title="A Limited Time Hikkaduwa"
                desc="Lorem ipsum dolor sit amet, sed do eiualiquip consectetur adipiscing elit, sed do eiualiquip ex ea commodo sed do eiualiquip sed do eiualiquip"
              />
            </Carousel>
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
