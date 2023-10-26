import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";
import projectImage1 from "../public/project-feature-images/MRG Primark.jpg";

export default function Card() {
  return (
    <>
      <div className={style.cardBox}>
        <div className={style.card_imageBox}>
          <Image
            src={projectImage1}
            alt="project-1"
            width={300}
            height={300}
            className={style.projectImage}
          />
        </div>
      </div>
    </>
  );
}
