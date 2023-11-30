import React, { useState } from 'react';
import styles from '../css/singleprojectwrapper.module.css';
import Image from 'next/image'

import floorplan1 from '../../../public/Floor-Plan/floor-plan-1.png'
import floorplan2 from '../../../public/Floor-Plan/floor-plan-2.png'
import floorplan3 from '../../../public/Floor-Plan/floor-plan-3.png'
import floorplan4 from '../../../public/Floor-Plan/floor-plan-4.png'




const images = [floorplan1, floorplan2, floorplan3, floorplan4 ]
export default function FloorPlan() {
  return (
    <div className={styles.FloorPlan_mainContainer}>
        <div className={styles.FloorPlan_headingBox}>Floor Plan - Hero Homes</div>
        <div className={styles.florPlan_imageContainer}>
            {images.map((el, i)=>{
                return (
                    <div className={styles.image_wrapper}>
                         <Image src={el} alt='Image' width={300} height={300} className={styles.floorPlan_imageStyle} />
                </div>
                )
            })}
        </div>
    </div>
  )
}
