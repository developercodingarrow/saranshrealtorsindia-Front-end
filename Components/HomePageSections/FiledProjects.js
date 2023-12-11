import React, { useContext, useState } from "react";
import style from "./css/FeatureListing.module.css";
import CardOne from "../../utilsComponents/cards/CardOne";

export default function FiledProject(props) {
  const { sectionTitle, sectionDescreption, projects } = props;
  return (
    <>
      <div className={style.FeatureListing_mainContainer}>
        <div className={style.section_text}>
          <h3 className={"section_title"}>{sectionTitle}</h3>
          <p className="section_descreption">{sectionDescreption}</p>
        </div>
        <div className={style.carousel_container}>
          {projects?.map((el, i) => {
            return (
              <div key={el._id}>
                <CardOne key={el._id} data={el} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
