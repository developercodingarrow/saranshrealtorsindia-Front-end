import React from "react";
import styles from "./css/buttons.module.css";

export default function Buttons(props) {
  const { text, buttonstyle, btnColor, btnSze, btnAction } = props;

  const buttonClasses = `${styles[buttonstyle]} ${styles[btnColor]} ${styles[btnSze]}`;
  return (
    <>
      <div>
        <button className={buttonClasses} onClick={btnAction}>
          {text}
        </button>
      </div>
    </>
  );
}
