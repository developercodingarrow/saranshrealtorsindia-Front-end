import React from "react";
import styles from "./css/Testimonials.module.css";
import { RiDoubleQuotesL } from "../../utilsComponents/ApplicationIcon";
import { TestimonialsData } from "../../jsonData/homePageData";

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
          {TestimonialsData.map((el, i) => {
            return (
              <div className={styles.Testimonials_box}>
                <div className={styles.DoubleQuotes_Box}>
                  <RiDoubleQuotesL />
                </div>
                <div className={styles.quotes_box}>{el.quotes}</div>
                <div className={styles.writer_nameBox}>
                  by -{" "}
                  <span className={styles.writer_name}>{el.writerName}</span>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
