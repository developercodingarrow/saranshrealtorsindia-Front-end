import React from "react";
import styles from "./css/card-one.module.css";
import Image from "next/image";
import imageSample from "../../public/project-feature-images/MRG Primark.jpg";
import {
  LiaRupeeSignSolid,
  CiLocationOn,
} from "../../utilsComponents/ApplicationIcon";
import Link from "next/link";

export default function CardOne(props) {
  const { data } = props;

  const cardImage = data.ProjectThumblin[0];
  return (
    <div className={styles.card_container}>
      <div className={styles.image_box}>
        {cardImage && (
          <Image
            src={`/project-feature-images/${data.ProjectThumblin[0].url}`}
            alt="blog-image"
            width={500}
            height={500}
            className={styles.image_style}
          />
        )}
      </div>
      <div className={styles.card_body}>
        <div className={styles.project_title}>{data.projectName}</div>
        <div className={styles.location_wrapper}>
          <div className={styles.location_IconBox}>
            <CiLocationOn />
          </div>
          <div className={styles.location_text}>
            {data.ProjectCity} - {data.ProjectSector}
          </div>
        </div>
        <div className={styles.unitType_warpeer}>
          <div>{data.UnitType}</div>
          <div>{data.FlatSizeRange}</div>
        </div>
        <div className={styles.price_btn_Container}>
          <div className={styles.priceBox}>
            <div className={styles.rupeess_IconBox}>
              <LiaRupeeSignSolid />
            </div>
            <div className={styles.price_text}>{data.BasicPrice}</div>
          </div>
          <div className={styles.btn_Box}>
            <Link href={`project/${data.slug}`} className={styles.linkStyle}>
              {" "}
              View
            </Link>
            .
          </div>
        </div>
        <div className={styles.Rera_No_Box}>24 Of 2018</div>
      </div>
    </div>
  );
}
