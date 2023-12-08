import React from "react";
import styles from "./css/contactus.module.css";
export default function ContactUsHero() {
  return (
    <>
      <div className={styles.heroSection_mainContainer}>
        <div className={styles.content_box}>
          <div>
            <h3>CONTACT US</h3>
          </div>
          <div className={styles.sort_Descreption}>
            <p>
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. SINT,
              DELENITI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
