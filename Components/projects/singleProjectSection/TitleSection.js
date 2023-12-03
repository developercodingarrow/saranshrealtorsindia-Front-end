import React, { useContext } from "react";
import styles from "../css/singleprojectwrapper.module.css";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";

export default function TitleSection() {
  const { singleProject } = useContext(ProjectContext);

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.left_part}>
          <h1>{singleProject.projectName}</h1>
          <p> RERA: 25 of 2017</p>
          <p>
            {" "}
            {singleProject.ProjectSector}, {singleProject.ProjectCity}{" "}
          </p>
        </div>
        <div className={styles.right_part}>
          <h3>{singleProject.BasicPrice}</h3>
          <p>{singleProject.FlatSizeRange}.</p>
        </div>
      </div>
    </>
  );
}
