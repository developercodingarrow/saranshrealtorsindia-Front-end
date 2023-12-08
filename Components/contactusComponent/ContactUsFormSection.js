import React from "react";
import styles from "./css/contactus.module.css";
import {
  CiLocationOn,
  FaPhoneAlt,
  MdMessage,
} from "../../utilsComponents/ApplicationIcon";

export default function ContactUsFormSection() {
  return (
    <>
      <div className={styles.formSection_mainContainer}>
        <div className={styles.form_innerConatiner}>
          <div className={styles.formPart}>
            <div className={styles.form_headingBox}>
              <h3>Get In Touch </h3>
            </div>
            <div className={styles.form_inputFileds_containert}>
              <form>
                <div className={styles.input_fileds_wrapper}>
                  <div className={styles.form_inputRow}>
                    <div className={styles.form_inputBox}>
                      <input type="text" className={styles.input_style} />
                    </div>
                    <div className={styles.form_inputBox}>
                      <input type="text" className={styles.input_style} />
                    </div>
                  </div>

                  <div className={styles.form_inputRow}>
                    <div className={styles.form_inputBox}>
                      <input type="text" className={styles.input_style} />
                    </div>
                    <div className={styles.form_inputBox}>
                      <input type="text" className={styles.input_style} />
                    </div>
                  </div>
                </div>
                <div className={styles.form_textAreaBox}>
                  <textarea className={styles.textArea_style} />
                </div>
                <div className={styles.btnBox}>
                  <button className={styles.btn_style}>SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
          {/* Details part start */}
          <div className={styles.detailsPart}>
            <div className={styles.detailPart_heading}>
              <h3>Say Hi!</h3>
            </div>

            <div className={styles.details_container}>
              <div className={styles.contact_informationBox}>
                <div className={styles.information_iconBox}>
                  <CiLocationOn />
                </div>
                <div className={styles.information_detailsBox}>
                  <h3>Head Office</h3>
                  <p>
                    416, Tower 4, DLF Corporate Greens, Sector 74A, Gurgaon -
                    122004
                  </p>
                </div>
              </div>

              <div className={styles.contact_informationBox}>
                <div className={styles.information_iconBox}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.information_detailsBox}>
                  <h3>Phone Number</h3>
                  <p>
                    Phone Number Sales Enquiry: +91-9717930806 Office :
                    +91-7503255000 CRM : 0124-5181141
                  </p>
                </div>
              </div>

              <div className={styles.contact_informationBox}>
                <div className={styles.information_iconBox}>
                  <MdMessage />
                </div>
                <div className={styles.information_detailsBox}>
                  <h3>Email Address</h3>
                  <p>info@saranshrealtors.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Details part end */}
        </div>
      </div>
    </>
  );
}
