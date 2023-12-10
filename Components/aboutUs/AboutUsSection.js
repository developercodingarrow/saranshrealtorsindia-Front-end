import React from "react";
import styles from "./css/aboutus.module.css";

export default function AboutUsSection() {
  return (
    <>
      <div className={styles.aboutUssection_container}>
        <div className={styles.AboutUsSection_headingBox}>
          <h2 className="section_title"> ABOUT US</h2>
          <p className="section_descreption">Welcome to Saransh Realtors</p>
        </div>
        <div className={styles.AboutUsSection_detailsBox}>
          <p>
            We are a 21st century major brand in real estate sector. Founded by
            Mr Shashi Gupta in 2007, with a vision of achieving a topmost
            position in real estate industry, the group showcases an ardent
            experience of 16 years in the real estate sector. Saransh Realtors
            has established itself as a well trusted real estate consultant in
            Gurugram. Our objective has always been to enable our buyers to live
            in the luxurious yet affordable homes. Our vision is to be India’s
            leading and most admired Real Estate Company. We as a real estate
            company develop and deliver a unique and comfortable environment
            through our high-quality architecture, strong project execution, and
            our customer-centric approach. We are known for our research and
            consultation qualities and our company is growing from strength to
            strength in India. Our company provides you with the real estate
            solutions and helps in exploring the field with an eye of investors.
            We are a group of highly determined and well-experienced
            professionals who believe in ethical practices because for us
            temporary is transient and permanent is for the lifetime.
          </p>
        </div>
      </div>
    </>
  );
}
