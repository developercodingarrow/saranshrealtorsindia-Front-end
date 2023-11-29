import React from 'react'
import styles from './css/card-one.module.css';
import Image from 'next/image'
import imageSample from '../../public/project-feature-images/MRG Primark.jpg'
import {
    LiaRupeeSignSolid,
    CiLocationOn,
  } from "../../utilsComponents/ApplicationIcon";
import Link from 'next/link';

export default function CardOne() {
  return (
    <div className={styles.card_container}>
        <div className={styles.image_box}>
            <Image src={imageSample} width={500} height={500}   alt="project image" className={styles.image_style} />
        </div>
        <div className={styles.card_body}>
        <div className={styles.project_title}>
        Signature Global city-12
        </div>
        <div className={styles.location_wrapper}>
          <div className={styles.location_IconBox}>
           < CiLocationOn />
          </div>
          <div className={styles.location_text}>
            Gurgaon - sector-39
          </div>
        </div>
        <div className={styles.unitType_warpeer}>
            <div>2BHK , 3 BHk</div>
            <div>450-470 sqft</div>
        </div>
        <div className={styles.price_btn_Container}>
            
           <div className={styles.priceBox}>
            <div className={styles.rupeess_IconBox}>
                < LiaRupeeSignSolid />
            </div>
            <div className={styles.price_text}>1.5 cr. Onweards</div>
           </div>
           <div className={styles.btn_Box}>
            <Link href={"/"} className={styles.linkStyle}> View</Link>
            .</div>
        </div>
        <div className={styles.Rera_No_Box}>
         24 Of 2018
        </div>
        </div>
     
    </div>
  )
}
