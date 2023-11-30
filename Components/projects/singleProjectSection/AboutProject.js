import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';

export default function AboutProject() {
  return (
    <div className={styles.about_projectContainer}>
        <div className={styles.about_headingBox}>
          <h3>About </h3> <span> - </span> <span>Godrej Oragadam</span>
        </div>
        <div className={styles.about_tableBox}>
            <div className={styles.table_Box}>
                {[1,2,3,4,5,6,7,8].map(()=>{
                    return (
                        <div className={styles.table_row}>
                        <div className={styles.table_left}>
                        Project Location
                        </div>
                        <div className={styles.table_right}>
                        Chennai
                        </div>
                     </div>
                    )
                })}
             
            </div>
        </div>
    </div>
  )
}
