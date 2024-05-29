import React from "react";
import styles from "./HotelAccommodation.module.css";
import HeroSection from "../../../components/common/HeroSection/HeroSection";
import AccommodationCard from "../../../components/specific/AccommodationCard/AccommodationCard";
import StayUs from "../../../components/common/StayUs/StayUs";
import Button from "../../../components/common/Button/Button";
import RoomCard from "../../../components/specific/RoomCard/RoomCard";

const HotelAccommodation = () => {
  return (
    <div>
      <HeroSection />

      <section className={styles.welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">Accommodation</h1>
          <p className="description mb-sm">
            "Welcome to Heaven Seven, where luxury meets the breathtaking beauty
            of Nuwara Eliya. Nestled amidst the misty hills of Sri Lanka's hill
            country, our hotel offers an unparalleled retreat for discerning
            travelers. Each of our meticulously designed accommodations reflects
            a harmonious blend of modern elegance and colonial charm, providing
            a sanctuary of comfort and tranquility. Wake up to panoramic views
            of lush tea plantations and rolling hills, and indulge in
            world-class amenities and personalized service throughout your stay.
            Whether you're here to explore the wonders of Nuwara Eliya or simply
            relax and rejuvenate amidst nature's splendor, Heaven Seven invites
            you to experience the epitome of luxury in the heart of Sri Lanka's
            hill station paradise."
          </p>
          <AccommodationCard
            logo="https://picsum.photos/400"
            title="Junior Suite"
            subtitle="Rooms Size : 150 Sqm"
            description="Lorem ipsum dolor sit amTo be a top-tier luxury hospitality provider in SriLanka, known globally for our innovative services, exceptional care, and eco-friendly practiceset,"
            isLeft={false}
          />

          <AccommodationCard
            logo="https://picsum.photos/400"
            title="Junior Suite"
            subtitle="Rooms Size : 150 Sqm"
            description="Lorem ipsum dolor sit amTo be a top-tier luxury hospitality provider in SriLanka, known globally for our innovative services, exceptional care, and eco-friendly practiceset,"
            isLeft={true}
          />

          <AccommodationCard
            logo="https://picsum.photos/400"
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
            <div className="grid col-3">
                <RoomCard 
                    cardImage="https://picsum.photos/400"
                    title="Double Dulx Room 01"
                    room={104}
                    
                />
                <RoomCard 
                    cardImage="https://picsum.photos/400"
                    title="Double Dulx Room 01"
                    room={104}
                />
                <RoomCard 
                    cardImage="https://picsum.photos/400"
                    title="Double Dulx Room 01"
                    room={104}
                />
            </div>
          </div>
          <div className={styles.suit_rooms}>
            <h1 className={styles.room_title}>Suit Rooms</h1>
            <div className="grid col-3 mb-lg">
            <RoomCard 
                    cardImage="https://picsum.photos/400"
                    title="Double Dulx Room 01"
                    room={104}
                />
                <RoomCard 
                    cardImage="https://picsum.photos/400"
                    title="Double Dulx Room 01"
                    room={104}
                />
                <RoomCard 
                    cardImage="https://picsum.photos/400"
                    title="Double Dulx Room 01"
                    room={104}
                />
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
