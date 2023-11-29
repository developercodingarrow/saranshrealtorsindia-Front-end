import React, { useContext, useEffect } from 'react'
import styles from './css/projectListComponent.module.css'
import {AppContext} from '../../contextApi/AppContextApi';
import Card from '../../utilsComponents/Card';
import {ProjectContext} from '../../contextApi/ProjectContextApi'
import SideEnquireForm from '../../utilsComponents/form/SideEnquireForm';




export default function ProjectListComponent() {
 const {allProjects , getAllProjectHandel} = useContext(ProjectContext)
const { handelToggleFillterDrawer, projectFillerDrawer} = useContext(AppContext);

console.log(allProjects)
useEffect(()=>{
  getAllProjectHandel();
}, [])

  const fillterDrawer  = projectFillerDrawer ? styles.sideBar_container : styles.close_SideBar_container;


  useEffect(() => {
    const sidebar = document.querySelector(`.${fillterDrawer}`);
    const initialTopPosition = 100;
    const scrollOffset = 15; // Adjust this value for the additional scroll before sidebar movement

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > initialTopPosition + scrollOffset) {
        sidebar.style.top = "0px"; // Change this value to move sidebar up when scrolled down
      } else {
        sidebar.style.top = initialTopPosition - scrollY + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.Page_mainContainer}>
       <div className={styles.inner_Container}>
        <div className={fillterDrawer}>
          {[1,2,3,4,5,6,7,8,9].map((el)=>{
            return (
              <p>{el}</p>
            )
          })}
        </div>
        <div className={styles.content_Conatiner}>
            <div className={styles.content_wrapper}>
              <div className={styles.fillter_barContainer} onClick={handelToggleFillterDrawer}>Fiilter bar</div>
              <div className={styles.project_card_wrapper}>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((data, i )=>{
                  return (
                   <div className={styles.dummy_Card}>
                    <p>Card</p>
                     </div>
                  )
                })}
                
              </div>
            </div>
            <div className={styles.sideForm_Container}>
              <SideEnquireForm />
            </div>
        </div>
       </div>
    </div>
  )
}
