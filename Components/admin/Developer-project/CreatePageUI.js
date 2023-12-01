import React, { useContext, useEffect } from 'react';
import styles from './css/createPageui.module.css';
import { useForm, Controller } from "react-hook-form";
import {ProjectPageContext} from '../../../contextApi/ProjectPageContextApi'

export default function CreatePageUI(props) {
  const {handelDeveloperList} = useContext(ProjectPageContext)
    const {pageTitle} = props;
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        control,
        watch,
      } = useForm({
        mode: "all", // Use "onChange" mode for real-time validation as the user types
      });

      const handelcreatepage = async(formdata)=>{
        console.log(formdata)
      }

      useEffect(()=>{
        handelDeveloperList() 
      }, [])


  return (
    <>
    <div className={styles.main_container}>
    <div className={styles.CreatePageUI_TitleBox}>
          {pageTitle}
      </div>

     <div className={styles.CreatePageUI_form_Box}>
     <form onSubmit={handleSubmit(handelcreatepage)}>
        <div className={styles.CreatePageUI_top_inputBox}>
          <div className={styles.input_box}>
            <input type='text' placeholder='add page Unique Title' className={styles.inputStyle}    name="pageTitle"
                {...register("pageTitle", {
                  required: true,
                })} />
          </div>
          <div className={styles.select_Box}>
            <select className={styles.selectBar} {...register("developer")}>
                <option>Godrej</option>
                <option>DLF</option>
                <option>Signature</option>
            </select>
          </div>
        </div>

        <div className={styles.textara_box}>
        <label className={styles.textarea_lable}> PAGE TOP DESCEPTION</label>  
         <textarea className={styles.textareaStyle} name="topDescription"
                {...register("topDescription", {
                  required: true,
                })}  />
        </div>

        <div className={styles.textara_box}>
        <label className={styles.textarea_lable}>PAGE BOOTOM DESCEPTION</label>  
         <textarea className={styles.textareaStyle}  name="bottomDescription"
                {...register("bottomDescription", {
                  required: true,
                })}/>
        </div>
         <div className={styles.CreatePageUI_btnBox}>
          <button className={styles.btnStyle}>Create</button>
         </div>
       </form>
    </div>   

    </div>
    </>
  )
}
