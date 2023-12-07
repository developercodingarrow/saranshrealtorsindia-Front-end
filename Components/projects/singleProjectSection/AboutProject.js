import React, { useContext } from "react";
import styles from "../css/singleprojectwrapper.module.css";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";

export default function AboutProject() {
  const { singleProject } = useContext(ProjectContext);

  console.log(singleProject);

  return (
    <div className={styles.about_projectContainer}>
      <div className={styles.about_headingBox}>
        <h3>About </h3> <span> - </span>{" "}
        <span>{singleProject.projectName}</span>
      </div>
      <div className={styles.about_tableBox}>
        <div className={styles.table_Box}>
          <div className={styles.table_row}>
            <div className={styles.table_left}>Project Location</div>
            <div className={styles.table_right}>
              {singleProject.locationName}
            </div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>Developer/Builder</div>
            <div className={styles.table_right}>{singleProject.developer}</div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>RERA NO</div>
            <div className={styles.table_right}>{singleProject.RERANo}</div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>Project Area</div>
            <div className={styles.table_right}>area filed add</div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>No of Floors</div>
            <div className={styles.table_right}>area filed add</div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>No of Units</div>
            <div className={styles.table_right}>area filed add</div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>Types of Units</div>
            <div className={styles.table_right}>{singleProject.UnitType}</div>
          </div>
          <div className={styles.table_row}>
            <div className={styles.table_left}>Possession</div>
            <div className={styles.table_right}>add posion filed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
