import React from "react";
import styles from "./css/Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <div className={styles.Testimonials_mainContainer}>
        <div className={styles.Testimonials_wrapper}>
          <div className={styles.Testimonials_box}></div>
          <div className={styles.Testimonials_box}></div>
          <div className={styles.Testimonials_box}></div>
        </div>
      </div>
    </>
  );
}
