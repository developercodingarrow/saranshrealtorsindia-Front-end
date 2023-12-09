import React from "react";
import styles from "./css/formsection.module.css";
export default function FormSection() {
  return (
    <>
      <div className={styles.FormSection_mainContainer}>
        <div className={styles.form_innerContainer}>
          <div className={styles.formSection_ContentPart}>
            <div className={styles.content_topBox}>
              <div className={styles.content_box}>
                <div className={styles.content_number}>01.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
              <div className={styles.content_box}>
                <div className={styles.content_number}>02.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
            </div>

            <div className={styles.content_topBox}>
              <div className={styles.content_box}>
                <div className={styles.content_number}>01.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
              <div className={styles.content_box}>
                <div className={styles.content_number}>02.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
            </div>
            <div className={styles.content_bottomBox}></div>
          </div>
          <div className={styles.formSection_formPart}>
            <div className={styles.form_wrapper}>
              <div className={styles.form_Title}>
                <h2>Real Estate Inquiry Form </h2>{" "}
              </div>
              <div className={styles.form_descreption}>
                Design custom lead capture forms that integrate with the Houzez
                CRM
              </div>
              <form className={styles.form_part}>
                <div className={styles.input_box}>
                  <input
                    placeholder="First Name"
                    className={styles.input_style}
                  />
                </div>
                <div className={styles.input_box}>
                  <input
                    placeholder="Email Address"
                    className={styles.input_style}
                  />
                </div>
                <div className={styles.input_box}>
                  <textarea
                    placeholder="Email Address"
                    className={styles.textarea_style}
                  />
                </div>

                <div className={styles.btn_Box}>
                  <button className={styles.btn_style}>SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// background-color: #00335A;
// opacity: 0.85;
// transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
