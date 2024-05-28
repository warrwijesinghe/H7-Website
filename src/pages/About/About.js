import React from "react";
import styles from "./About.module.css";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import StayUs from "../../components/common/StayUs/StayUs";
import Partners from "../../components/specific/Partners/Partners";
import Card from "../../components/specific/Card/Card";
import logo from "../../assets/images/logo-ne.png";
import Button from "../../components/common/Button/Button";

const About = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.mission_section}>
        <div className="container">
          <div className={styles.about_card}>
            <div className={`${styles.about_card_image} ${styles.right_image}`}>
              <img
                src="https://picsum.photos/400"
                alt="heaven Seven"
                className={styles.about_card_img}
              />
            </div>
            <div
              className={`${styles.about_card_content} ${styles.left_content}`}
            >
              <h1 className={styles.about_card_title}>Our Mission</h1>
              <p className={styles.about_card_description}>
                Lorem ipsum dolor sit amTo be a top-tier luxury hospitality
                provider in SriLanka, known globally for our innovative
                services, exceptional care, and eco-friendly practiceset,
                consectetur adipiscing elit, sed do eiualiquip ex ea commodo
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.vision_section}>
        <div className="container">
          <div className={styles.about_card}>
            <div className={`${styles.about_card_image} ${styles.left_image}`}>
              <img
                src="https://picsum.photos/400"
                alt="heaven Seven"
                className={styles.about_card_img}
              />
            </div>
            <div
              className={`${styles.about_card_content} ${styles.right_content}`}
            >
              <h1 className={styles.about_card_title}>Our Vision</h1>
              <p className={styles.about_card_description}>
                Lorem ipsum dolor sit amTo be a top-tier luxury hospitality
                provider in SriLanka, known globally for our innovative
                services, exceptional care, and eco-friendly practiceset,
                consectetur adipiscing elit, sed do eiualiquip ex ea commodo
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.founders_section}>
        <div className="container text-center">
          <span className="subheading">Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">Leading Through Powers</h1>
          <div className={styles.founders}>
            <div className={styles.left_item}>
              <img
                src="https://picsum.photos/400"
                alt="heaven Seven"
                className={styles.left_founder}
              />
              <h1 className={styles.founder_title}>Founder</h1>
              <span className={styles.founder_subtitle}>
                Haven Seven Hotels
              </span>
              <p className={styles.founder_name}>Ananda Rathnayke</p>
            </div>
            <div className={styles.right_item}>
              <div className={styles.founder}>
                <img
                  src="https://picsum.photos/400"
                  alt="heaven Seven"
                  className={styles.founder_img}
                />

                <div className={styles.founder_content}>
                  <h1 className={styles.founder_title}>Managing Director</h1>
                  <p className={styles.founder_name}>Heshan Rathnayke</p>
                </div>
              </div>
              <div className={styles.founder}>
                <img
                  src="https://picsum.photos/400"
                  alt="heaven Seven"
                  className={styles.founder_img}
                />

                <div className={styles.founder_content}>
                  <h1 className={styles.founder_title}>
                    Group General Manager
                  </h1>
                  <p className={styles.founder_name}>Farhan Farouk</p>
                </div>
              </div>
              <div className={styles.founder}>
                <img
                  src="https://picsum.photos/400"
                  alt="heaven Seven"
                  className={styles.founder_img}
                />

                <div className={styles.founder_content}>
                  <h1 className={styles.founder_title}>Chief Accountant</h1>
                  <p className={styles.founder_name}>M. M. Sirisoma</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.director}>
          <div className={styles.director_content}>
          <img
                  src="https://picsum.photos/400"
                  alt="heaven Seven"
                  className={styles.director_img}
                />

                <div>
                <h1 className={styles.founder_title}>Director of Operations</h1>
                <p className={styles.founder_name}>Hiran Serasinghe</p>
                <p className={styles.vice_name}>Vice President</p>
                <p className={styles.normal_title}><span>Hotels Association of Sri Lanka.</span></p>
                <p className={styles.normal_title}><span>Member</span> - Sri Lanka Tourism</p>
                <p className={styles.normal_title}>Development Authority (Hotel Classification Committee)</p>
                <p className={styles.normal_title}><span>First Sri Lankan GM</span> of an internationally managed 5 star hotel.</p>

                </div>
          </div>
            <p className={styles.director_description}>
              With a distinguished career spanning prestigious establishments,
              Mr. Hiran Serasinghe epitomizes excellence in the hospitality
              industry. A graduate of the renowned Oberoi School of Hotel
              Management in New Delhi, Mr. Serasinghe's journey is a testament
              to his unwavering dedication and expertise. His tenure at Lanka
              Oberoi (now Cinnamon Grand), a distinguished 5-starproperty, saw
              him hold pivotal roles such as Training Manager, Restaurant
              Manager (fine dining), Executive Kitchen Steward, Food & Beverage
              Controller, Banquet Manager, and Food & Beverage Manager.
              Transitioning to Pegasus Reef Hotel (Golden Tulip Hotel) as
              General Manager, Mr. Serasinghe's strategic leadership propelled
              the hotel to new heights of success. His crowning achievement came
              as the General Manager of Colombo Renaissance Hotel(Ramada
              International, now Cinnamon Lakeside), where he became the first
              Sri Lankan to hold this prestigious position in an internationally
              managed 5-starhotel in Sri Lanka. Beyond his operational roles,
              Mr. Serasinghe has played pivotal roles in shaping the hospitality
              landscape. He completed the esteemed 'Training the Trainer'
              program by Cornell University, augmenting his proficiency in
              talent development and training. He served as Vice President of
              the Hotels Association of Sri Lanka and lent his expertise to the
              Sri Lanka Tourism Development Authority hotel classification
              committee. Internationally recognized for his expertise, Mr.
              Serasinghe has served as a judge in esteemed culinary and barista
              competitions, further solidifying his stature in the industry
            </p>
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
      <section className={`text-center ${styles.mice_section}`}>
        <div className="container ">
          <span className="subheading">Welcome To Haven Seven Hotels</span>
          <h1 className="heading-primary mb-lg">MICE Tours</h1>

          <div className={styles.mice_content}>
            <h1 className={styles.mice_title}>Your Business Is Our Pleasure</h1>
            <p className={styles.mice_desc}>
              MICE (Meetings, Incentives, Conferences, and Exhibitions): Elevate
              your corporate events with our dedicated MICE services, offering
              state-of-the-art facilities and tailored support to ensure your
              meetings, incentives, conferences, and exhibitions are executed
              flawlessly at Heaven Seven Hotels.
            </p>
            <Button type="button" variant="primary">
              Explore More
            </Button>
          </div>
        </div>
      </section>
      <Partners />
      <StayUs />
    </div>
  );
};

export default About;
