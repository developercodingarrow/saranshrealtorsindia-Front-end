import React from "react";
import styles from "./css/pageLoading.module.css";

export default function PageLoading() {
  return (
    <>
      <div className={styles.main_container}>
        <div>
          <div className={styles.spinnerLoader}>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
    </>
  );
}
