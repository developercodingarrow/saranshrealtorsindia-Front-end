import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';
import Image from 'next/image';
import sampleImage from '../../../public/amenities/amenities-1.png'

export default function Amenities() {
  return (
    <div className={styles.Amenities_maincontainer}>
      <div className={styles.Amenities_titleBox}>
       Amenities - Hero Homes
      </div>
     <div className={styles.Amenities_container}> 
     {[1,2,3,4,5,6,7,8,9,0, 11, 12].map((el ,i )=>{
      return (
        <div className={styles.Amenities_box}>
        <div className={styles.Amenities_imageBox}>
         <Image src={sampleImage} width={300} height={300} className={styles.aminites_imageStyle} />
        </div>
        <div className={styles.Amenities_text}>
        BADMINTON COURT
        </div>
   </div>
      )
     })}
   
      </div>
    </div>
  )
}
