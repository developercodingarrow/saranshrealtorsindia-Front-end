import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';

export default function TitleSection() {
  return (
    <> 
    <div className={styles.titleContainer}>
      <div className={styles.left_part}>
      <h1>Pareena Laxmi Apartments</h1>
         <p> RERA: 25 of 2017</p>
         <p>Sector 99A, Dwarka Expressway, Gurgaon </p>
      </div>
         <div className={styles.right_part}>
          <h3>18 Lac Onwards</h3>
          <p>600 - 2400 Sq.Ft.</p>
         </div>

    </div>
    </>
  )
}
