import React from "react";
import styles from "./css/AdminContdentUI.module.css";
export default function AdminContdentUI({ pageTitle, children }) {
  return (
    <>
      <div className={styles.Content_mainContainer}>
        <div className={styles.page_contentTitle}>{pageTitle}</div>
        <div className={styles.content_part}>{children}</div>
      </div>
    </>
  );
}
