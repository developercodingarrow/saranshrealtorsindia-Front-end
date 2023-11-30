import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';
import Image from 'next/image';
import sampleImage from '../../../public/project-feature-images/MRG Primark.jpg'

export default function ImageContainer() {
  return (
    <div className={styles.image_container}>
        <Image src={sampleImage} alt='project-image' width={900} height={900} className={styles.imageStyle}/>
    </div>
  )
}
