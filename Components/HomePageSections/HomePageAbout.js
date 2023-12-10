import React from "react";
import styles from "./css/HomepageSections.module.css";
import Link from "next/link";

export default function HomePageAbout() {
  return (
    <>
      <div className={styles.HomePageAbout_mainContainer}>
        <div className={styles.section_Title}>
          <h3 className={"section_title"}>About Us</h3>
        </div>
        <div className={styles.section_descreption}>
          <p>
            Saransh Realtors has established itself as a consultant-Real Estate
            in Gurgaon for the past 16 years. We provide tailor made solutions
            for your various purposes to invest into real estate. We can be
            looked for Investments real estate portfolio management. We have
            loan facility for our all projects available. We believe in
            delivering value for your money and committed to our work. We Expert
            in Affordable Housing Projects.
          </p>
        </div>
        <div className={styles.HomePageAbout_btnBox}>
          <Link href={"#"} className={styles.readMoreLink_style}>
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
}
