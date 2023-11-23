import React, { useContext, useEffect } from "react";
import styles from "./css/enquireListcomponent.module.css";
import { EnqureContext } from "../../contextApi/EnquireyContextApi";

export default function EnquiresListComponent() {
  const { handelgetEnquires, allEnquires, setallEnquires } =
    useContext(EnqureContext);

  useEffect(() => {
    handelgetEnquires();
  }, []);
  return (
    <div className={styles.EnquiresListComponent_mainContainer}>
      <div className={styles.EnquiresListComponent_TitleBox}>New Enquires</div>

      {/* Table container start */}
      <div className={styles.table_container}>
        <div className={styles.table_header}>
          <div className={styles.Serioul_Number}>S No</div>
          <div className={styles.Craeted_date}> Date</div>
          <div className={styles.admin_Name}>Name</div>
          <div className={styles.user_name}>E-mail</div>
          <div className={styles.mobile_Number}>Mobile Number</div>
          <div className={styles.action}>Delete</div>
        </div>
        <div className={styles.table_body}>
          {allEnquires.map((el, i) => {
            return (
              <div className={styles.table_row} key={el._id}>
                <div className={styles.Serioul_Number}>{1 + i}</div>
                <div className={styles.Craeted_date}>20-11-2023</div>
                <div className={styles.admin_Name}>{el.name}</div>
                <div className={styles.user_name}>{el.email}</div>
                <div className={styles.mobile_Number}>{el.number}</div>
                <div className={styles.action}>Delete</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Table container End */}
    </div>
  );
}
