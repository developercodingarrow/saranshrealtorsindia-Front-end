import React from "react";
import AboutHero from "./AboutHero";
import AboutUsSection from "./AboutUsSection";
import styles from "./css/aboutus.module.css";

export default function AboutUsWrapper() {
  return (
    <>
      <div>
        <AboutHero />
      </div>
      <div className={styles.aboutus_wrapperConatiner}>
        <AboutUsSection />
      </div>
    </>
  );
}
