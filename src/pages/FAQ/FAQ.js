import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.css";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import StayUs from "../../components/common/StayUs/StayUs";
import FaqItem from "../../components/specific/FaqItem/FaqItem";
import { fetchPropertyText } from "../../api/apiClient";

const FAQ = () => {
  const [propertyText, setPropertyText] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData] = await Promise.all([
          fetchPropertyText('Group', 'Testimonials'),
        ]);

        setPropertyText(textData);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <p className="description mb-sm">
          {propertyText?.welcome_paragraph_1?.text || ''}
          </p>
        </div>
      </section>
      <section className={styles.faq_section}>
        <div className="container">
          <div className={styles.faq}>
            <FaqItem
              title="How can I make a reservation ?"
              disc="Reserve directly through our website for the best rates, call our reservation team, or book through major travel platforms."
            />
            <FaqItem
              title="What is your cancellation policy ?"
              disc="Cancel up to 48 hours before your arrival date without any charge. Cancellations within 48 hours will incur a charge for one night's stay."
            />
            <FaqItem
              title="Can I request an early check-in or late check-out ?"
              disc="Subject to availability, early check-in or late check-out can be arranged for an additional fee. Please contact the hotel directly to make arrangements."
            />
            <FaqItem
              title="Are your hotels pet-friendly ?"
              disc="Currently, only service animals are permitted in our hotels. Please contact us for more details or assistance."
            />
            <FaqItem
              title="What types of rooms are available and what are their differences ?"
              disc="We offer a variety of room types including standard, deluxe, and suites. Differences include size, view, amenities, and included services."
            />
            <FaqItem
              title="Do you have accessible rooms ?"
              disc="Yes, we offer rooms designed for accessibility. Please specify your needs when booking to ensure the right accommodations."
            />
            <FaqItem
              title="What amenities are included in the rooms ?"
              disc="All rooms include Wi-Fi, air conditioning, private bathrooms, a flat-screen TV, and a minibar. Higher-tier rooms may offer additional luxuries."
            />
            <FaqItem
              title="Is parking available at the hotel?"
              disc="Yes, complimentary parking is available for all guests. Valet services may also be available."
            />
            <FaqItem
              title="Do you offer airport shuttle service?"
              disc="We offer airport transfers at an additional cost. Please provide your flight details when booking to arrange a pickup."
            />
            <FaqItem
              title="What dining options are available at the hotel?"
              disc="Our hotels feature on-site restaurants with diverse menus, including local and international cuisine. Room service is also available."
            />
            <FaqItem
              title="Do your hotels have gym facilities?"
              disc="Yes, our hotels are equipped with a gym and other fitness facilities. Some locations also offer classes and personal training sessions."
            />
            <FaqItem
              title="Do you have a loyalty program?"
              disc="Yes, our loyalty program offers exclusive benefits, rewards, and discounts. Sign up through our website or at check-in."
            />
            <FaqItem
              title="Is smoking allowed in the rooms or on the hotel premises?"
              disc="Our hotels are smoke-free environments. Designated smoking areas are available outside the buildings."
            />
            <FaqItem
              title="How do I get to the hotel from the nearest train station or airport?"
              disc="Detailed directions and options for public transportation can be found on our website or by contacting our front desk."
            />
            <FaqItem
              title="What local attractions are near the hotel?"
              disc="Our staff are happy to recommend local attractions and assist with arranging tours and tickets."
            />
            <FaqItem
              title="Can the hotel accommodate dietary restrictions for its dining services?"
              disc="Yes, please inform us of any dietary restrictions in advance, and our chefs will accommodate your needs."
            />
            <FaqItem
              title="What security measures are in place at your hotels?"
              disc="We offer family-friendly activities and services, including kids' clubs and family accommodations."
            />
            <FaqItem
              title="Are there spa services at the hotel?"
              disc="We prioritize guest safety with 24/7 security personnel, surveillance systems, and secure key card access to guest areas."
            />
            <FaqItem
              title="How can I provide feedback about my stay?"
              disc="Select properties feature full-service spas offering massages, facials, and other treatments."
            />
            <FaqItem
              title="Are there any special packages currently available?"
              disc="Feedback can be provided directly at the front desk upon checkout, through our website, or via the post-stay email survey."
            />
            <FaqItem
              title="Is there a business center available to guests?"
              disc="Check our website or contact us directly for information on seasonal packages, special events, and promotions."
            />
            <FaqItem
              title="What is the process for items left behind in the hotel?"
              disc="Yes, our business center provides computers, printers, and other office supplies and services."
            />
            <FaqItem
              title="Do you have any environmentally friendly practices at your hotels?"
              disc="We are committed to sustainability with practices including energy-efficient utilities, recycling programs, and eco-friendly amenities."
            />
          </div>
        </div>
      </section>
      <StayUs />
    </div>
  );
};

export default FAQ;
