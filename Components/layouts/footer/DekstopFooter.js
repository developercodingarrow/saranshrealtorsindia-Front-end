import React from "react";
import styles from "../css/footer.module.css";

export default function DekstopFooter() {
  return (
    <>
      <div className={styles.DekstopFooter_mainContainer}>
        <div className={styles.DekstopFooter_columOne}>
          <div>Logo Box</div>
          <div>Sort Descreption</div>
        </div>
      </div>
    </>
  );
}
