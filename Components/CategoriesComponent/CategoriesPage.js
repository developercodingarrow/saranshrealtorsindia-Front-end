import React from "react";
import styles from "./css/categories.module.css";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";
import CardOne from "../../utilsComponents/cards/CardOne";

export default function CategoriesPage(props) {
  const { projectBy } = props;

  console.log(projectBy);
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.page_Header}>
          <div className={styles.title_box}>
            <h1> godrej </h1>
          </div>
        </div>
        <div className={styles.Inner_Container}>
          <div className={styles.card_container}>
            {[1, 2, 3].map((el, i) => {
              // return <CardOne key={i} />;
              return <p>Text</p>;
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
  );
}
