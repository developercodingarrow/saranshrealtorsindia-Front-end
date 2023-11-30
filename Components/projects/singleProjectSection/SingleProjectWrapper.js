import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';
import TitleSection from './TitleSection';

export default function SingleProjectWrapper() {
  return (
    <>
    <div className={styles.wrapper_mainContainer}>
        <div>
            <TitleSection />
        </div>
    </div>
    </>
  )
}
