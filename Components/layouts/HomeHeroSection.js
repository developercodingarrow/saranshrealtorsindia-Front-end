import React from "react";
import style from "./css/HeroSection.module.css";

export default function HomeHeroSection() {
  return (
    <>
      <div className={style.Hero_mainContainer}>
        <div className={style.Hero_TextBox}>
          <h3>Welcome To Saransh Realtors India</h3>
          <p>
            Saransh Realtors has established itself as a consultant-Real Estate{" "}
            <br></br>
            in Gurgaon for the past 16 years
          </p>
        </div>
      </div>
    </>
  );
}
