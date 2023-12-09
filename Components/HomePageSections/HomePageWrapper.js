import React from "react";
import HomeHeroSection from "../layouts/HomeHeroSection";
import FeatureListing from "./FeatureListing";
import HomePageAbout from "./HomePageAbout";
import styles from "./css/HomepageSections.module.css";
import HomePageProjectTypeSection from "./HomePageProjectTypeSection";
import FormSection from "./FormSection";
import TeamSection from "./TeamSection";

export default function HomePageWrapper() {
  return (
    <>
      <div className={styles.section_wraper_mainContainer}>
        <div>
          <HomeHeroSection />
        </div>
        <div>
          <FeatureListing />
        </div>
        <div>
          <HomePageAbout />
        </div>
        <div>
          <HomePageProjectTypeSection />
        </div>
        <div>
          <FormSection />
        </div>
        <div>
          <TeamSection />
        </div>
      </div>
    </>
  );
}
