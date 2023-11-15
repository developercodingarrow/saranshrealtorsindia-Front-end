import React from "react";
import styles from "./css/buttonElements.module.css";

export default function ButtonElements({ label, onClick, btnDesign }) {
  return (
    <>
      <div>
        <button onClick={onClick} className={styles[btnDesign]}>
          {label}
        </button>
      </div>
    </>
  );
}
