import React from 'react'
import styles from '../css/singleprojectwrapper.module.css';



export default function LineEnqueiesForm() {
  return (
    <div className={styles.form_container}>
        <form className={styles.form_Box}>
            <div className={styles.input_box}>
                 <input type='text' placeholder='Enter Your Name' className={styles.inputStyle} />
            </div>
            <div className={styles.input_box}>
                 <input type='text' placeholder='Enter Your Name' className={styles.inputStyle} />
            </div>
            <div className={styles.input_box}>
                 <input type='text' placeholder='Enter Your Name' className={styles.inputStyle} />
            </div>

            <div className={styles.btn_box}>
                <button className={styles.btn}> Submit</button>
            </div>
        </form>
    </div>
  )
}
