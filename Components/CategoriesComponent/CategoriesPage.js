import React from 'react'
import styles from './css/categories.module.css';
import Image from 'next/image'
import imageSample from '../../public/Company-logo/banner image.jpg'
import SideEnquireForm from '../../utilsComponents/form/SideEnquireForm';
import CardOne from '../../utilsComponents/cards/CardOne';


export default function CategoriesPage() {
  return (
    <>
     <div className={styles.main_container}>
        <div className={styles.page_Header}>
        <div className={styles.title_box}>
            <h1> Godrej Projects  </h1>
           </div>
        </div>
        <div className={styles.Inner_Container}>
           <div className={styles.card_container}>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((el , i)=>{
                return(

                    <CardOne key={i}/>
                )
              })}
           </div>
           <div className={styles.sideForm_Container}>
              <div className={styles.form_inner_container}>
              <SideEnquireForm />
              </div>
            
            </div>
        </div>
        
     </div>
    </>
  )
}
