import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";
import projectImage1 from "../public/project-feature-images/MRG Primark.jpg";
import {
  LiaRupeeSignSolid,
  CiLocationOn,
} from "../utilsComponents/ApplicationIcon";

export default function Card({ data }) {
  const {
    projectName,
    ProjectSector,
    ProjectCity,
    BasicPrice,
    UnitType,
    FlatSizeRange,
    ProjectThumblin,
  } = data;

  console.log(ProjectThumblin[0].url);
  return (
    <>
      <div className={style.cardBox}>
        <div className={style.card_imageBox}>
          <Image
            src={`/project-feature-images/${ProjectThumblin[0].url}`}
            alt="project-1"
            width={300}
            height={300}
            className={style.projectImage}
          />
        </div>
        <div className={style.cardBody}>
          <div className={style.card_TitleBox}>
            <h4>{projectName}</h4>
          </div>
          <div className={style.project_location}>
            <div className={style.location_iconBox}>
              <CiLocationOn />
            </div>
            <div className={style.location_addres}>
              {ProjectSector}- {ProjectCity}
            </div>
          </div>
          <div className={style.type_box}>
            <div>
              <p>{UnitType}</p>
            </div>
            <div>
              <p>{FlatSizeRange}</p>
            </div>
          </div>

          <div className={style.card_btnBox}>
            <div className={style.Price_Box}>
              <div className={style.rupess_iconBox}>
                <LiaRupeeSignSolid />
              </div>
              <div className={style.price_ValueBox}>
                <p>{BasicPrice}</p>
              </div>
            </div>
            <div className={style.btn_Box}>
              <button>View Details</button>
            </div>
          </div>
          <div className={style.rera_numberBox}>
            <p>24 of 2018</p>
          </div>
        </div>
      </div>
    </>
  );
}
