import React from "react";
import HomeHeroSection from "../layouts/HomeHeroSection";
import FeatureListing from "./FeatureListing";
import HomePageAbout from "./HomePageAbout";
import styles from "./css/HomepageSections.module.css";
import HomePageProjectTypeSection from "./HomePageProjectTypeSection";
import FormSection from "./FormSection";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";
import UpcomingProjects from "./UpcomingProjects";

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
          <UpcomingProjects />
        </div>
        <div>
          <TeamSection />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}
