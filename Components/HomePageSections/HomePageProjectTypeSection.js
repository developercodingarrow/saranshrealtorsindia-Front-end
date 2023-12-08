import React from "react";
import styles from "./css/HomepageSections.module.css";

export default function HomePageProjectTypeSection() {
  return (
    <>
      <div className={styles.HomePageProjectTypeSection_mainContainer}>
        <div className={styles.residention_Container}>
          <div className={styles.residention_leftPart}>
            <div className={styles.content_part}>
              <h3>Residential</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi dunt
              </p>
            </div>
            <div>Image Box</div>
          </div>
          <div className={styles.residention_RightPart}>
            <div className={styles.Big_imageBox}>Big Image</div>
            <div className={styles.small_image_container}>
              <div className={styles.small_imageBox}>small Image box</div>
              <div className={styles.small_imageBox}>small Image box</div>
            </div>
          </div>
        </div>
        <div className={styles.commercial_container}>
          <div className={styles.commercial_contentBox}>
            <h3>Commercial</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidi dunt
            </p>
          </div>

          <div className={styles.commercial_ImageBox}>commercial boxImage</div>
          <div className={styles.commercial_ImageBox}>commercial boxImage</div>
        </div>
      </div>
    </>
  );
}
