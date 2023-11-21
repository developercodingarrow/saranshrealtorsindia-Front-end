import React from "react";
import styles from "./css/status-dot.module.css";

export default function StatusDot({ adminStatus }) {
  const dotstyle =
    adminStatus === "activate"
      ? styles.greenLight
      : adminStatus === ""
      ? styles.redLight
      : "";

  return (
    <>
      <div className={dotstyle}></div>
    </>
  );
}
