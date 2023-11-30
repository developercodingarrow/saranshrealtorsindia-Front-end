import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';
import TitleSection from './TitleSection';
import LineEnqueiesForm from './LineEnqueiesForm';
import ImageContainer from './ImageContainer';
import AboutProject from './AboutProject';
import ProjectContent from './ProjectContent';
import Amenities from './Amenities';

export default function SingleProjectWrapper() {
  return (
    <>
    <div className={styles.wrapper_mainContainer}>
        <div>
            <TitleSection />
        </div>
        <div>
       <LineEnqueiesForm />
        </div>

        <div className={styles.inner_container}>
          <div>
          <ImageContainer />
          </div>

          <div>
            <AboutProject />
          </div>
          <div>
            <ProjectContent />
          </div>

          <div>
            <Amenities />
          </div>
        
        </div>
    </div>
    </>
  )
}
