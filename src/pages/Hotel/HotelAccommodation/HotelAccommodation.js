import React, { useEffect, useState } from "react";
import styles from "./HotelAccommodation.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import AccommodationCard from "../../../components/specific/AccommodationCard/AccommodationCard";
import StayUs from "../../../components/common/StayUs/StayUs";
import Button from "../../../components/common/Button/Button";
import RoomCard from "../../../components/specific/RoomCard/RoomCard";
import Carousel from "../../../components/specific/Carousel/Carousel";
import { fetchPropertyText } from "../../../api/apiClient";
import { useParams } from "react-router-dom";

const HotelAccommodation = () => {
  let { hotel } = useParams();

  const [propertyText, setPropertyText] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData] = await Promise.all([
          fetchPropertyText(hotel, "Accommodation"),
        ]);

        setPropertyText(textData);
      } catch (err) {
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


  return (
    <div>
      <HeroSection />

      <section className={styles.welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">{propertyText?.welcome_Header?.text || ""}</h1>
          <p className="description mb-sm">
          {propertyText?.welcome_paragraph_1?.text || ""}
          </p>
          <AccommodationCard
            logo="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
            title="Junior Suite"
            subtitle="Rooms Size : 150 Sqm"
            description="Lorem ipsum dolor sit amTo be a top-tier luxury hospitality provider in SriLanka, known globally for our innovative services, exceptional care, and eco-friendly practiceset,"
            isLeft={false}
          />

          <AccommodationCard
            logo="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
            title="Junior Suite"
            subtitle="Rooms Size : 150 Sqm"
            description="Lorem ipsum dolor sit amTo be a top-tier luxury hospitality provider in SriLanka, known globally for our innovative services, exceptional care, and eco-friendly practiceset,"
            isLeft={true}
          />

          <AccommodationCard
            logo="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
            title="Junior Suite"
            subtitle="Rooms Size : 150 Sqm"
            description="Lorem ipsum dolor sit amTo be a top-tier luxury hospitality provider in SriLanka, known globally for our innovative services, exceptional care, and eco-friendly practiceset,"
            isLeft={false}
          />
        </div>
      </section>
      <section className={styles.rooms_section}>
        <div className="container text-center">
          <div className={styles.delux_rooms}>
            <h1 className={styles.room_title}>Delux Rooms</h1>
            <div className="desktop">
              <div className={`grid col-3 ${styles.mobile_grid}`}>
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
              </div>
            </div>
            <div className="mobile">
              <Carousel>
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
              </Carousel>
            </div>
          </div>
          <div className={styles.suit_rooms}>
            <h1 className={styles.room_title}>Suit Rooms</h1>
            <div className="desktop">
              <div className={`grid col-3 ${styles.mobile_grid}`}>
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
              </div>
            </div>
            <div className="mobile">
              <Carousel>
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
                <RoomCard
                  cardImage="http://mdev.miracleclouds.com/heaven-seven/web/images/heaven-seven.jpg"
                  title="Double Dulx Room 01"
                  room={104}
                />
              </Carousel>
            </div>
          </div>

          <p className="description mb-sm">
            Escape to luxury in our Grand Rooms, where comfort meets elegance.
            Unwind amidst stunning views and modern amenities for a truly
            unforgettable stay at Heaven Seven.
          </p>

          <Button type="button" variant="primary">
            Book Now
          </Button>
        </div>
      </section>
      <StayUs />
    </div>
  );
};

export default HotelAccommodation;
