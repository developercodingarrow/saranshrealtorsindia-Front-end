import React from "react";
import styles from "./css/Testimonials.module.css";
import { RiDoubleQuotesL } from "../../utilsComponents/ApplicationIcon";

export default function Testimonials() {
  return (
    <>
      <div className={styles.Testimonials_mainContainer}>
        <div className={styles.section_header}>
          <div className={styles.section_heading}>Testimonials</div>
          <div className={styles.section_descreption}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </div>
        </div>
        <div className={styles.Testimonials_wrapper}>
          <div className={styles.Testimonials_box}>
            <div className={styles.DoubleQuotes_Box}>
              <RiDoubleQuotesL />
            </div>
            <div className={styles.quotes_box}>
              We just want to thank Saransh Realtors and their team for such
              careful attention to our beautiful home. Very happy with the
              services you delivered. Shall refer our friends and co-workers to
              you. Many thanks
            </div>
            <div className={styles.writer_nameBox}>
              by - <span className={styles.writer_name}> PREETI KAUSHIK</span>{" "}
            </div>
          </div>
          <div className={styles.Testimonials_box}>
            <div className={styles.DoubleQuotes_Box}>
              <RiDoubleQuotesL />
            </div>
            <div className={styles.quotes_box}>
              We just want to thank Saransh Realtors and their team for such
              careful attention to our beautiful home. Very happy with the
              services you delivered. Shall refer our friends and co-workers to
              you. Many thanks
            </div>
            <div className={styles.writer_nameBox}>
              by - <span className={styles.writer_name}> PREETI KAUSHIK</span>{" "}
            </div>
          </div>
          <div className={styles.Testimonials_box}>
            <div className={styles.DoubleQuotes_Box}>
              <RiDoubleQuotesL />
            </div>
            <div className={styles.quotes_box}>
              We just want to thank Saransh Realtors and their team for such
              careful attention to our beautiful home. Very happy with the
              services you delivered. Shall refer our friends and co-workers to
              you. Many thanks
            </div>
            <div className={styles.writer_nameBox}>
              by - <span className={styles.writer_name}> PREETI KAUSHIK</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
