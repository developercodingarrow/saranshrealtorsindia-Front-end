import React from 'react';
import styles from '../css/singleprojectwrapper.module.css';
import Image from 'next/image'

import floorplan1 from '../../../public/Floor-Plan/floor-plan-1.png'

export default function LayoutPlan() {
  return (
    <div className={styles.LayoutPlan_mainContainer}>
        <div className={styles.LayoutPlan_headingBox}>
        Layout Plan - Hero Homes
        </div>

        <div className={styles.layout_ImageBox}>
            <Image  src={floorplan1} alt='floor-plan image' width={900} height={900} className={styles.layOut_imageStyle}/>
        </div>
    </div>
  )
}
