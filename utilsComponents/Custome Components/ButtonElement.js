import React from "react";
import styles from "./css/buttonElements.module.css";

export default function ButtonElements({ label, onClick, btnDesign, itemId }) {
  return (
    <>
      <div>
        <button onClick={() => onClick(itemId)} className={styles[btnDesign]}>
          {label}
        </button>
      </div>
    </>
  );
}
