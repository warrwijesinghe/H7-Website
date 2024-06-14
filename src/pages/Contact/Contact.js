import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import StayUs from "../../components/common/StayUs/StayUs";
import Partners from "../../components/specific/Partners/Partners";
import Button from "../../components/common/Button/Button";
import ContactForm from "../../components/specific/ContactForm/ContactForm";
import { fetchProperties, fetchPropertyText } from "../../api/apiClient";

const Contact = () => {
  const [propertyText, setPropertyText] = useState(null);
  const [properties, setProperties] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [textData, propertiesData] = await Promise.all([
          fetchPropertyText("Group", "Contact Us"),
          fetchProperties(),
        ]);

        setPropertyText(textData);
        setProperties(propertiesData.filter((item) => item.id !== 14));
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

  console.log("text", propertyText);
  console.log("properties", properties);

  return (
    <div className={styles.contact_component}>
      <HeroSection />
      <section className={styles.welcome_section}>
        <div className="container text-center">
          <h1 className="heading-secondary">
            {propertyText?.welcome_Header?.text || ""}
          </h1>
          <p className="description mb-sm">
            {propertyText?.welcome_paragraph_1?.text || ""}
          </p>
        </div>
      </section>
      <section className={styles.map_section}>
        <div className="container text-center">
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4070111965875!2d80.76191997412151!3d6.961220593039239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38054d4cc649f%3A0xfb3cd8f551d1d8dc!2sHeaven%20Seven%20Nuwara%20Eliya!5e0!3m2!1sen!2slk!4v1716724373876!5m2!1sen!2slk"
              title="Map of Heaven Seven Nuwara Eliya"
              loading="lazy"
              className={styles.iframe_map}
            ></iframe>

            <div className={styles.contact_detail}>
              <h4 className={styles.contact_detail_title}>General Inquiries</h4>
              <h6 className={styles.contact_detail_subtitle}>Address</h6>
              <p className={styles.contact_detail_desc}>
                25/8 Sangaraja Mawatha, Hillwood College Road, Kandy.
              </p>

              <h6 className={styles.contact_detail_subtitle}>Email</h6>
              <p className={styles.contact_detail_desc}>
                info@heavensevenhotels.com
              </p>

              <div className={styles.contact_groups}>
                <div className={styles.contact_group}>
                  <h6 className={styles.contact_detail_subtitle}>
                    Front Office
                  </h6>
                  <p className={styles.contact_detail_desc}>
                    (+94) 814 954 234
                  </p>
                </div>
                <div className={styles.contact_group}>
                  <h6 className={styles.contact_detail_subtitle}>Accounts</h6>
                  <p className={styles.contact_detail_desc}>
                    (+94) 814 954 243
                  </p>
                </div>
                <div className={styles.contact_group}>
                  <h6 className={styles.contact_detail_subtitle}>Hotline</h6>
                  <p className={styles.contact_detail_desc}>
                    (+94) 770 049 528
                  </p>
                  <p className={styles.contact_detail_desc}>
                    (+94) 770 049 566
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hotels_section}>
        <div className="container">
          <div className={`grid col-2 ${styles.mobile_grid}`}>
            {properties &&
              properties.map((item) => (
                <div className={styles.hotel} key={item.id}>
                  <img
                    src={item.property_image_urls[0]?.imgeUrl}
                    alt={item.property_image_urls[0]?.imgAlt}
                  />
                  <div className={styles.hotel_content}>
                    <h1 className={styles.hotel_title}>{item.shortName}</h1>
                    <p className={styles.hotel_desc}>
                    {item.shortDescription}
                    </p>
                    <Button type="button" variant="primary">
                      Get In Touch
                    </Button>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
      </section>

      <section className={styles.contact_form_section}>
        <div className="container ">
          <div className={styles.contact_form}>
            <h1 className="heading-tertiary text-center">Let's Contact</h1>

            <ContactForm />
          </div>
        </div>
      </section>

      <StayUs />
      <Partners />
    </div>
  );
};

export default Contact;
